import { Suspense } from 'react';
import AdminPageClient from './AdminPageClient';

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

const AdminPage = () => (
  <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading admin portal…</div>}>
    <AdminPageClient />
  </Suspense>
);

export default AdminPage;
