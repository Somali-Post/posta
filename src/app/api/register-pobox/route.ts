import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const sanitizeFilename = (filename: string) => filename.replace(/\s+/g, '_');

const bufferFromFile = async (file: File) => {
  const arrayBuffer = await file.arrayBuffer();
  return Buffer.from(arrayBuffer);
};

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const getText = (key: string) => {
      const value = formData.get(key);
      return typeof value === 'string' ? value.trim() : '';
    };

    const getOptionalText = (key: string) => {
      const value = formData.get(key);
      return typeof value === 'string' && value.trim().length > 0 ? value.trim() : null;
    };

    const getFile = (key: string) => {
      const value = formData.get(key);
      return value instanceof File && value.size > 0 ? value : null;
    };

    // --- Parse every field from the form ---
    const name = getText('name');
    const email = getText('email');
    const phone = getText('phone');
    const location = getText('location');
    const language = getOptionalText('language') ?? 'en';
    const dateOfBirth = getText('dateOfBirth');
    const niraIdNumber = getOptionalText('niraIdNumber');
    const passportNumber = getOptionalText('passportNumber');
    const occupation = getOptionalText('occupation');
    const boxTypeRaw = getText('boxType');
    const boxTypeValue = boxTypeRaw.toLowerCase() === 'business' ? 'business' : 'individual';
    const normalizedBoxType = boxTypeValue === 'business' ? 'Business' : 'Individual';
    const companyName = getOptionalText('companyName');
    const licenseNumber = getOptionalText('licenseNumber');
    const whatsapp = getOptionalText('whatsapp');

    const idFile = getFile('idFile');
    const photoFile = getFile('photoFile');
    const licenseFile = getFile('licenseFile');

    if (!name || !email || !phone || !location || !dateOfBirth || !boxTypeRaw) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }
    if (!niraIdNumber && !passportNumber) {
      return NextResponse.json({ error: 'Either NIRA ID or passport number is required.' }, { status: 400 });
    }
    if (boxTypeValue === 'individual' && !occupation) {
      return NextResponse.json({ error: 'Occupation is required for individual applications.' }, { status: 400 });
    }
    if (boxTypeValue === 'business' && (!companyName || !licenseNumber || !licenseFile)) {
      return NextResponse.json({ error: 'Company name, license number, and license file are required for business applications.' }, { status: 400 });
    }
    if (!idFile || !photoFile) {
      return NextResponse.json({ error: 'ID document and photo are required.' }, { status: 400 });
    }

    // --- Get latest box number ---
    const { data: latestBox, error: latestBoxError } = await supabaseAdmin
      .from('customers')
      .select('po_box_number')
      .order('po_box_number', { ascending: false })
      .limit(1)
      .maybeSingle();
    if (latestBoxError) throw latestBoxError;

    const lastNumber = typeof latestBox?.po_box_number === 'number'
      ? latestBox.po_box_number
      : latestBox?.po_box_number
        ? Number(latestBox.po_box_number)
        : null;
    const newPoBoxNumber = Number.isFinite(lastNumber) ? Number(lastNumber) + 1 : 635;

    // --- Upload helper always uses admin client ---
    const uploadFile = async (bucket: string, file: File, path: string) => {
      const buffer = await bufferFromFile(file);
      const { data, error } = await supabaseAdmin.storage
        .from(bucket)
        .upload(path, buffer, {
          upsert: true,
          contentType: file.type || 'application/octet-stream',
        });
      if (error) {
        throw new Error(`Supabase Storage Error in bucket '${bucket}': ${error.message}`);
      }
      return data?.path ?? path;
    };

    const idDocumentPath = await uploadFile('id-documents', idFile, `${newPoBoxNumber}/${sanitizeFilename(idFile.name)}`);
    const photoPath = await uploadFile('photos', photoFile, `${newPoBoxNumber}/${sanitizeFilename(photoFile.name)}`);
    let licenseDocumentPath: string | null = null;
    if (licenseFile) {
      licenseDocumentPath = await uploadFile(
        'license-documents',
        licenseFile,
        `${newPoBoxNumber}/${sanitizeFilename(licenseFile.name)}`
      );
    }

    // --- Insert record into database ---
    const { data: newCustomer, error: insertError } = await supabaseAdmin
      .from('customers')
      .insert({
        name,
        email,
        phone,
        whatsapp,
        language,
        location,
        box_type: normalizedBoxType,
        date_of_birth: dateOfBirth,
        nira_id_number: niraIdNumber,
        passport_number: passportNumber,
        occupation,
        company_name: boxTypeValue === 'business' ? companyName : null,
        license_number: boxTypeValue === 'business' ? licenseNumber : null,
        po_box_number: newPoBoxNumber,
        id_document_url: idDocumentPath,
        photo_url: photoPath,
        license_document_url: licenseDocumentPath,
        payment_status: 'pending',
        application_status: 'pending_review',
        verification_notes: null,
      })
      .select()
      .single();
    if (insertError) throw insertError;

    // --- Send confirmation email (if SMTP env vars exist) ---
    if (
      process.env.EMAIL_SERVER_HOST &&
      process.env.EMAIL_SERVER_PORT &&
      process.env.EMAIL_SERVER_USER &&
      process.env.EMAIL_SERVER_PASSWORD &&
      process.env.EMAIL_FROM
    ) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: Number(process.env.EMAIL_SERVER_PORT),
        secure: Number(process.env.EMAIL_SERVER_PORT) === 465,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      });
      const body = [
        `Dear ${name},`,
        '',
        'Thank you for submitting your P.O. Box application to Somali Post.',
        `Your application has been received and assigned provisional box number ${newPoBoxNumber}.`,
        'We will review your submission and contact you once it is approved.',
        '',
        'Regards,',
        'Somali Post',
      ].join('\n');

      await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: email,
        subject: 'Somali Post P.O. Box Application Received',
        text: body,
      });
    } else {
      console.warn('Email credentials missing; skipping confirmation email.');
    }

    return NextResponse.json({ message: 'Application submitted successfully!', customer: newCustomer });
  } catch (error) {
    console.error('API Error:', error);
    const message = error instanceof Error ? error.message : 'An unknown server error occurred.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
