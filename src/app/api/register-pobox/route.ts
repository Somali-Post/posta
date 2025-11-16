// src/app/api/register-pobox/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, phone, whatsapp, boxType } = await request.json();

  if (!name || !email || !phone || !boxType) {
    return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
  }

  // --- THIS IS THE NEW PART ---
  // We create the secure link for the admin to click
  const adminSecretKey = process.env.ADMIN_SECRET_KEY;
  const confirmationUrl = new URL(`${request.headers.get('origin')}/admin`);
  confirmationUrl.searchParams.set('name', name);
  confirmationUrl.searchParams.set('email', email);
  confirmationUrl.searchParams.set('phone', phone);
  confirmationUrl.searchParams.set('boxType', boxType);
  confirmationUrl.searchParams.set('secret', adminSecretKey || '');
  // --- END OF NEW PART ---

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
          <p style="margin-top: 20px;"><strong>Action Required:</strong> Once you have confirmed the EVC Plus payment, click the link below to issue the official e-certificate:</p>
          <a href="${confirmationUrl.toString()}" style="display: inline-block; padding: 10px 20px; background-color: #0D47A1; color: #fff; text-decoration: none; border-radius: 5px;">
            Confirm Payment & Send Certificate
          </a>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Application submitted successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send application.' }, { status: 500 });
  }
}
