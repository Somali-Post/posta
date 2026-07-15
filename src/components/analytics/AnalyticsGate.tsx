'use client';

import { Analytics } from '@vercel/analytics/react';

export function AnalyticsGate() {
  if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
    return null;
  }

  return <Analytics />;
}
