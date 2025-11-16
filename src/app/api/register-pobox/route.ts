// src/app/api/register-pobox/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, whatsapp, boxType } = await request.json();

  // Basic validation
  if (!name || !email || !phone || !boxType) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: Number(process.env.EMAIL_SERVER_PORT) === 465,
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New P.O. Box Application: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #0D47A1;">New P.O. Box Application Received</h2>
          <p>A new application has been submitted through the Posta.so website.</p>
          <hr>
          <h3>Applicant Details:</h3>
          <ul>
            <li><strong>Full Name:</strong> ${name}</li>
            <li><strong>Email:</strong> ${email}</li>
            <li><strong>Phone Number:</strong> ${phone}</li>
            <li><strong>WhatsApp Number:</strong> ${whatsapp || 'Same as phone'}</li>
            <li><strong>Box Type:</strong> ${boxType}</li>
          </ul>
          <hr>
          <p><strong>Next Steps:</strong> Please wait for the applicant to send payment via EVC Plus. Once payment is confirmed, please issue the e-certificate to their email and/or WhatsApp.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send application.' }, { status: 500 });
  }
}