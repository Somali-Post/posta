import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

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
      const { error } = await supabaseAdmin.storage
        .from(bucket)
        .upload(path, file, { upsert: true }); 
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
    
    // --- THE FIX IS HERE ---
    // We are now explicitly setting the payment_status for the new record.
    const { error: insertError } = await supabaseAdmin.from('customers').insert({
      name, email, phone, whatsapp,
      box_type: boxType,
      po_box_number: newPoBoxNumber,
      company_name: companyName,
      license_number: licenseNumber,
      id_document_url: idFilePath,
      photo_url: photoFilePath,
      license_document_url: licenseFilePath,
      payment_status: 'pending', // Add this line
    });
    // ----------------------

    if (insertError) throw insertError;
    
    // Optional: Nodemailer logic here

    return NextResponse.json({ message: 'Success!' });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
