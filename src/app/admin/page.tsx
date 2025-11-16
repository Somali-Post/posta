"use client";
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';

const AdminConfirmationContent = () => {
  const searchParams = useSearchParams();
  const name = searchParams?.get('name') || '';
  const email = searchParams?.get('email') || '';
  const phone = searchParams?.get('phone') || '';
  const boxType = searchParams?.get('boxType') || '';
  const secretKey = searchParams?.get('secret') || '';

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSendCertificate = async () => {
    setStatus('loading');
    try {
      const response = await fetch('/api/send-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, boxType, secretKey }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setStatus('success');
      setMessage(result.message);
    } catch (err: any) {
      setStatus('error');
      setMessage(err.message);
    }
  };
  
  // Basic security check
  if (!secretKey) {
    return <div className="min-h-screen flex items-center justify-center"><p className="text-red-500">Access Denied: Missing Secret Key.</p></div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-brand-dark-blue mb-6">Confirm Payment & Issue Certificate</h1>
        <div className="space-y-4 mb-8 border-t border-b py-4">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Box Type:</strong> {boxType}</p>
        </div>
        <p className="text-sm text-gray-600 mb-4">Click the button below only after you have confirmed receipt of the EVC Plus payment.</p>
        <button onClick={handleSendCertificate} disabled={status === 'loading' || status === 'success'} className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed">
          {status === 'loading' ? 'Sending...' : 'Confirm Payment & Send Certificate'}
        </button>
        {status === 'success' && <p className="mt-4 text-green-700">{message}</p>}
        {status === 'error' && <p className="mt-4 text-red-700">{message}</p>}
      </div>
    </div>
  );
};

const AdminConfirmationPage = () => (
  <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
    <AdminConfirmationContent />
  </Suspense>
);

export default AdminConfirmationPage;
