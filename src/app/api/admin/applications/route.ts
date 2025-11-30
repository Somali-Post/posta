import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_KEY!);
const isAdminPortalEnabled = process.env.NEXT_PUBLIC_ENABLE_ADMIN_PORTAL === 'true';

const APPLICATION_STATUSES = new Set(['pending_review', 'documents_verified', 'certificate_sent']);

const withAdminGuard = async (request: Request) => {
  if (!isAdminPortalEnabled) {
    return { errorResponse: NextResponse.json({ error: 'Admin portal is disabled.' }, { status: 503 }) };
  }

  const body = await request.json();
  if (body.secretKey !== process.env.ADMIN_SECRET_KEY) {
    return { errorResponse: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }) };
  }
  return { body };
};

export async function POST(request: Request) {
  const guard = await withAdminGuard(request);
  if ('errorResponse' in guard) {
    return guard.errorResponse;
  }

  const { status, customerId } = guard.body as { status?: string; customerId?: string };

  try {
    let query = supabaseAdmin
      .from('customers')
      .select(
        'id,name,email,phone,whatsapp,location,language,box_type,payment_status,application_status,verification_notes,created_at,po_box_number,id_document_url,photo_url,license_document_url,license_number,nira_id_number,passport_number'
      );

    if (customerId) {
      const { data, error } = await query.eq('id', customerId).maybeSingle();
      if (error) throw error;
      if (!data) {
        return NextResponse.json({ error: 'Customer not found.' }, { status: 404 });
      }
      return NextResponse.json({ customer: data });
    }

    if (status && status !== 'all' && APPLICATION_STATUSES.has(status)) {
      query = query.eq('application_status', status);
    }

    const { data, error } = await query.order('created_at', { ascending: false }).limit(200);
    if (error) throw error;
    return NextResponse.json({ applications: data ?? [] });
  } catch (error) {
    console.error('Admin list error:', error);
    const message = error instanceof Error ? error.message : 'Failed to load applications.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  const guard = await withAdminGuard(request);
  if ('errorResponse' in guard) {
    return guard.errorResponse;
  }

  const { customerId, applicationStatus, verificationNotes } = guard.body as {
    customerId?: string;
    applicationStatus?: string;
    verificationNotes?: string | null;
  };

  if (!customerId) {
    return NextResponse.json({ error: 'Customer ID is required.' }, { status: 400 });
  }
  if (!applicationStatus || !APPLICATION_STATUSES.has(applicationStatus)) {
    return NextResponse.json({ error: 'Invalid application status.' }, { status: 400 });
  }

  try {
    const { data, error } = await supabaseAdmin
      .from('customers')
      .update({
        application_status: applicationStatus,
        verification_notes: verificationNotes ?? null,
      })
      .eq('id', customerId)
      .select('application_status, verification_notes')
      .single();
    if (error) throw error;
    return NextResponse.json({ customer: data });
  } catch (error) {
    console.error('Admin update error:', error);
    const message = error instanceof Error ? error.message : 'Failed to update application.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
