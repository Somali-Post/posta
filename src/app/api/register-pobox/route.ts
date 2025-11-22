import { NextResponse } from 'next/server';

const isPoboxRegistrationEnabled = process.env.NEXT_PUBLIC_ENABLE_POBOX_REGISTRATION === 'true';

export async function POST() {
  if (!isPoboxRegistrationEnabled) {
    return NextResponse.json(
      { error: 'Online P.O. Box applications are temporarily unavailable. Please visit the GPO to apply.' },
      { status: 503 }
    );
  }

  return NextResponse.json(
    { error: 'Online P.O. Box registrations are currently paused.' },
    { status: 503 }
  );
}
