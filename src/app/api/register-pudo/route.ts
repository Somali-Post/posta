import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { businessName, ownerName, phone, location } = await request.json();

  if (!businessName || !ownerName || !phone || !location) {
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
      bcc: process.env.EMAIL_BCC,
      subject: `New RUG PUDO Partner Interest: ${businessName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #0D47A1;">New RUG PUDO Partner Application</h2>
          <p>The following business has registered their interest in becoming a RUG PUDO partner.</p>
          <hr>
          <h3>Business Details:</h3>
          <ul>
            <li><strong>Business Name:</strong> ${businessName}</li>
            <li><strong>Owner's Name:</strong> ${ownerName}</li>
            <li><strong>Phone Number:</strong> ${phone}</li>
            <li><strong>Location / District:</strong> ${location}</li>
          </ul>
          <hr>
          <p><strong>Next Steps:</strong> Please add this business to the potential partner database for follow-up when the program launches.</p>
        </div>
      `,
    });

    return NextResponse.json({ message: 'Thank you for your interest! We will be in touch soon.' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to submit application.' }, { status: 500 });
  }
}
