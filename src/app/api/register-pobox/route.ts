import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer'; // Make sure this is imported

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

export async function POST(request: Request) {
  const formData = await request.formData();
  
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const whatsapp = formData.get('whatsapp') as string | null;
  const boxType = formData.get('boxType') as string;
  const companyName = formData.get('companyName') as string | null;
  const licenseNumber = formData.get('licenseNumber') as string | null;
  const language = (formData.get('language') as string) || 'en';
  
  const idFile = formData.get('idFile') as File;
  const photoFile = formData.get('photoFile') as File;
  const licenseFile = formData.get('licenseFile') as File | null;

  try {
    const { data: latestBox, error: latestBoxError } = await supabaseAdmin
      .from('customers')
      .select('po_box_number')
      .order('po_box_number', { ascending: false })
      .limit(1)
      .single();
    if (latestBoxError && latestBoxError.code !== 'PGRST116') throw latestBoxError;
    const newPoBoxNumber = latestBox ? latestBox.po_box_number + 1 : 635;

    const uploadFile = async (bucket: string, file: File, path: string) => {
      const { error } = await supabaseAdmin.storage.from(bucket).upload(path, file, { upsert: true }); 
      if (error) throw error;
    };

    const idFilePath = `${newPoBoxNumber}/${idFile.name.replace(/\s/g, '_')}`;
    await uploadFile('id-documents', idFile, idFilePath);
    const photoFilePath = `${newPoBoxNumber}/${photoFile.name.replace(/\s/g, '_')}`;
    await uploadFile('photos', photoFile, photoFilePath);
    let licenseFilePath: string | null = null;
    if (licenseFile) {
        licenseFilePath = `${newPoBoxNumber}/${licenseFile.name.replace(/\s/g, '_')}`;
        await uploadFile('license-documents', licenseFile, licenseFilePath);
    }
    
    const { data: newCustomer, error: insertError } = await supabaseAdmin
      .from('customers')
      .insert({
        name,
        email,
        phone,
        whatsapp,
        box_type: boxType,
        po_box_number: newPoBoxNumber,
        company_name: companyName,
        license_number: licenseNumber,
        id_document_url: idFilePath,
        photo_url: photoFilePath,
        license_document_url: licenseFilePath,
        payment_status: 'pending',
        language,
      })
      .select()
      .single();
    if (insertError) throw insertError;
    if (!newCustomer) throw new Error('Failed to create customer record.');
    
    // --- ADDED BACK: Email Notification Logic ---
    const adminSecretKey = process.env.ADMIN_SECRET_KEY;
    const confirmationUrl = new URL(`${request.headers.get('origin')}/admin`);
    confirmationUrl.searchParams.set('id', newCustomer.id);
    confirmationUrl.searchParams.set('name', newCustomer.name);
    confirmationUrl.searchParams.set('email', newCustomer.email);
    confirmationUrl.searchParams.set('phone', newCustomer.phone);
    confirmationUrl.searchParams.set('boxType', newCustomer.box_type);
    confirmationUrl.searchParams.set('box', newCustomer.po_box_number.toString());
    confirmationUrl.searchParams.set('secret', adminSecretKey || '');

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: Number(process.env.EMAIL_SERVER_PORT) === 465,
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New P.O. Box Application: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New P.O. Box Application (Box #${newPoBoxNumber})</h2>
          <p>A new application has been successfully saved to the database.</p>
          <hr>
          <h3>Applicant Details:</h3>
          <ul>
            <li><strong>Full Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Assigned P.O. Box #:</strong> ${newPoBoxNumber}</li>
          </ul>
          <hr>
          <p><strong>Action Required:</strong> Once you confirm payment, click the link below to issue the certificate:</p>
          <a href="${confirmationUrl.toString()}" style="display: inline-block; padding: 10px 20px; background-color: #0D47A1; color: #fff; text-decoration: none; border-radius: 5px;">
            Confirm Payment & Send Certificate
          </a>
        </div>
      `,
    });
    // --- END OF ADDED BACK CODE ---

    return NextResponse.json({ message: 'Success!' });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
