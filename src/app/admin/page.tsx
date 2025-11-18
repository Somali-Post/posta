"use client";

import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const AdminConfirmationPage = () => {
  const searchParams = useSearchParams();
  const customerId = searchParams.get('id') || '';
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const phone = searchParams.get('phone') || '';
  const boxType = searchParams.get('boxType') || '';
  const poBoxNumber = searchParams.get('box') || '';
  const secretKey = searchParams.get('secret') || '';

  const [paymentDate, setPaymentDate] = useState('');
  const [paymentRef, setPaymentRef] = useState('');

  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [message, setMessage] = useState('');

  const handleSendCertificate = async () => {
    if (!paymentDate.trim()) {
      setError('Payment Date & Time is required.');
      return;
    }
    setError('');
    setStatus('loading');

    try {
      const response = await fetch('/api/send-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId,
          poBoxNumber,
          paymentDate,
          paymentRef,
          secretKey,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setStatus('success');
      setMessage(result.message);
    } catch (err: any) {
      setStatus('idle');
      setError(err.message);
    }
  };

  if (!secretKey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Access Denied.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-brand-dark-blue mb-6">Confirm Payment &amp; Issue Certificate</h1>
        <div className="space-y-4 mb-8 border-t border-b py-4">
          <p>
            <strong>Name:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Phone:</strong> {phone}
          </p>
          <p>
            <strong>Box Type:</strong> {boxType}
          </p>
          <p>
            <strong>Assigned P.O. Box #:</strong>{' '}
            <span className="font-bold text-xl">{poBoxNumber}</span>
          </p>
        </div>

        <div className="space-y-4 mb-6">
          <div>
            <label htmlFor="paymentDate" className="block text-sm font-medium text-gray-700">
              EVC Payment Date &amp; Time
            </label>
            <input
              type="text"
              id="paymentDate"
              placeholder="e.g., 2025-11-18 02:02"
              value={paymentDate}
              onChange={(e) => setPaymentDate(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
            />
          </div>
          <div>
            <label htmlFor="paymentRef" className="block text-sm font-medium text-gray-700">
              EVC Transaction ID (Optional)
            </label>
            <input
              type="text"
              id="paymentRef"
              value={paymentRef}
              onChange={(e) => setPaymentRef(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-dark-blue focus:ring-brand-dark-blue"
            />
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-4">Click below only after you have confirmed the EVC Plus payment.</p>
        <button
          onClick={handleSendCertificate}
          disabled={status === 'loading' || status === 'success'}
          className="w-full bg-green-600 text-white font-bold py-3 rounded-md hover:bg-green-700 transition disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Processing...' : 'Confirm Payment & Send Certificate'}
        </button>
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
        {status === 'success' && <p className="mt-4 text-green-700 text-center">{message}</p>}
      </div>
    </div>
  );
};

export default AdminConfirmationPage;
