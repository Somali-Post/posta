import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { createClient } from '@supabase/supabase-js';
import React from 'react';

import { CertificateEmail } from '@/components/emails/CertificateEmail';
import { CertificateEmailSomali } from '@/components/emails/CertificateEmail.so';
import { CertificateEmailArabic } from '@/components/emails/CertificateEmail.ar';

const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
const isAdminPortalEnabled = process.env.NEXT_PUBLIC_ENABLE_ADMIN_PORTAL === 'true';

const sanitizeEmailHtml = (html: string) => {
  const withoutDoctype = html.replace(/<!DOCTYPE[\s\S]*?>/i, '').trim();
  const withoutPreload = withoutDoctype.replace(/<link[^>]+rel="preload"[^>]*>/gi, '');
  const withoutComments = withoutPreload.replace(/<!--\/?\$-->/g, '');
  return `<!DOCTYPE html><html><body>${withoutComments}</body></html>`;
};

export async function POST(request: Request) {
  if (!isAdminPortalEnabled) {
    return NextResponse.json(
      { error: 'Certificate issuing is temporarily disabled.' },
      { status: 503 }
    );
  }

  try {
    const { customerId, poBoxNumber, paymentDate, paymentRef, secretKey } = await request.json();

    if (secretKey !== process.env.ADMIN_SECRET_KEY) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    if (!customerId) {
      return NextResponse.json({ error: 'Customer ID is required.' }, { status: 400 });
    }
    if (poBoxNumber === undefined || poBoxNumber === null || poBoxNumber === '') {
      return NextResponse.json({ error: 'P.O. Box number is required.' }, { status: 400 });
    }

    const { error: updateError } = await supabaseAdmin
      .from('customers')
      .update({
        payment_status: 'confirmed',
        payment_date: paymentDate || null,
        payment_ref: paymentRef || null,
      })
      .eq('id', customerId);
    if (updateError) throw updateError;

    const { data: customer, error: customerError } = await supabaseAdmin
      .from('customers')
      .select('name, email, box_type, language')
      .eq('id', customerId)
      .single();

    if (customerError) throw customerError;
    if (!customer) throw new Error('Customer not found after update.');

    const normalizedPoBoxNumber = String(poBoxNumber);
    const now = new Date();
    const serialNumber = `000/${normalizedPoBoxNumber}/${now.getFullYear()}`;
    const expiryDateDate = new Date(now);
    expiryDateDate.setFullYear(now.getFullYear() + 1);
    const expiryDate = expiryDateDate.toLocaleDateString('en-CA');

    const templateProps = {
      name: customer.name,
      poBoxNumber: normalizedPoBoxNumber,
      expiryDate,
      serialNumber,
    };

    let emailHtml: string;
    switch (customer.language) {
      case 'so':
        emailHtml = sanitizeEmailHtml(
          await render(React.createElement(CertificateEmailSomali, templateProps))
        );
        break;
      case 'ar':
        emailHtml = sanitizeEmailHtml(
          await render(React.createElement(CertificateEmailArabic, templateProps))
        );
        break;
      default:
        emailHtml = sanitizeEmailHtml(
          await render(React.createElement(CertificateEmail, templateProps))
        );
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
