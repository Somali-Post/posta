import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import React from 'react';
import { render } from '@react-email/render'; // This import is now valid
import { CertificateEmail } from '@/components/emails/CertificateEmail';

export async function POST(request: Request) {
  const { name, email, boxType, secretKey } = await request.json();
  
  // Security Check
  if (secretKey !== process.env.ADMIN_SECRET_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Generate a placeholder P.O. Box number
  const poBoxNumber = `MOG-${Math.floor(1000 + Math.random() * 9000)}`;
  const issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  // This is the line that was causing the error. It will now work.
  const emailHtml = await render(
    React.createElement(CertificateEmail, { name, boxType, poBoxNumber, issueDate })
  );

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
      to: email, // Send to the customer
      subject: 'Your Official Somali Post P.O. Box Certificate',
      html: emailHtml,
    });
    return NextResponse.json({ message: `Certificate sent to ${email} successfully!` });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send certificate.' }, { status: 500 });
  }
}
