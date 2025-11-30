import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { createClient } from '@supabase/supabase-js';
import React from 'react';

import { Certificate } from '@/emails/Certificate';

const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);

export async function POST(request: Request) {
  try {
    const { customerId, poBoxNumber, paymentDate, paymentRef, secretKey } = await request.json();

    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await supabaseAdmin
      .from('customers')
      .update({
        payment_status: 'confirmed',
        payment_date: paymentDate,
        payment_ref: paymentRef,
      })
      .eq('id', customerId);

    const { data: customer } = await supabaseAdmin
      .from('customers')
      .select('name, email, location')
      .eq('id', customerId)
      .single();

    if (!customer) {
      throw new Error('Customer not found.');
    }

    const issueDate = new Date().toLocaleDateString('en-GB');
    const expiryDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString('en-GB');
    const serialNumber = `000/${poBoxNumber}/${new Date().getFullYear()}`;

    const emailHtml = await render(
      React.createElement(Certificate, {
        name: customer.name,
        poBoxNumber,
        serialNumber,
        issueDate,
        expiryDate,
        location: customer.location ?? 'Muqdisho',
      })
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

    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: customer.email,
      subject: 'Your Official Somali Post P.O. Box Certificate',
      html: emailHtml,
    });

    return NextResponse.json({ message: `Certificate sent to ${customer.email} successfully!` });
  } catch (error: any) {
    console.error('Send Certificate API Error:', error);
    return NextResponse.json({ error: error.message || 'An unknown server error occurred.' }, { status: 500 });
  }
}
