import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const isAdminPortalEnabled = process.env.NEXT_PUBLIC_ENABLE_ADMIN_PORTAL === 'true';

export async function POST(request: Request) {
  if (!isAdminPortalEnabled) {
    return NextResponse.json({ error: 'Document access is temporarily disabled.' }, { status: 503 });
  }

  const { bucket, path, secretKey } = await request.json();

  if (secretKey !== process.env.ADMIN_SECRET_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  if (!bucket || !path) {
    return NextResponse.json({ error: 'Bucket and path are required.' }, { status: 400 });
  }

  try {
    const { data, error } = await supabaseAdmin.storage.from(bucket).createSignedUrl(path, 300);

    if (error) throw error;

    return NextResponse.json({ signedUrl: data.signedUrl });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'An unknown error occurred.';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
