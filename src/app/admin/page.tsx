"use client";

import { notFound } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

const DocumentViewer = ({
  bucket,
  path,
  label,
  secretKey,
}: {
  bucket: string;
  path: string;
  label: string;
  secretKey: string;
}) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchUrl = async () => {
      try {
        const response = await fetch('/api/get-secure-file-url', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ bucket, path, secretKey }),
        });
        if (!response.ok) throw new Error('Failed to get URL');
        const { signedUrl } = await response.json();
        setUrl(signedUrl);
      } catch (error) {
        console.error(error);
        setUrl('');
      } finally {
        setIsLoading(false);
      }
    };

    if (path) fetchUrl();
  }, [bucket, path, secretKey]);

  if (!path) return null;
  if (isLoading) return <p>Loading {label}...</p>;
  if (!url) return <p>Could not load {label}.</p>;

  const isImage = /\.(jpg|jpeg|png|gif)$/i.test(path);

  return (
    <div className="mb-4">
      <h3 className="font-semibold">{label}</h3>
      {isImage ? (
        <img src={url} alt={label} className="mt-2 border rounded-md max-w-full h-auto" />
      ) : (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-brand-dark-blue underline"
        >
          View Document
        </a>
      )}
    </div>
  );
};

const isAdminPortalEnabled = process.env.NEXT_PUBLIC_ENABLE_ADMIN_PORTAL === 'true';

const AdminConfirmationPage = () => {
  if (!isAdminPortalEnabled) {
    notFound();
  }

  const searchParams = useSearchParams();
  const customerId = searchParams.get('id') || '';
  const name = searchParams.get('name') || '';
  const email = searchParams.get('email') || '';
  const phone = searchParams.get('phone') || '';
  const boxType = searchParams.get('boxType') || '';
  const poBoxNumber = searchParams.get('box') || '';
  const idPath = searchParams.get('idPath') || '';
  const photoPath = searchParams.get('photoPath') || '';
  const licensePath = searchParams.get('licensePath') || '';
  const secretKey = searchParams.get('secret') || '';

  const [paymentDate, setPaymentDate] = useState<Date | null>(new Date());
  const [paymentRef, setPaymentRef] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [message, setMessage] = useState('');

  const handleSendCertificate = async () => {
    if (!paymentDate) {
      setError('Payment Date & Time is required.');
      return;
    }
    setError('');
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/send-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId,
          poBoxNumber,
          paymentDate: paymentDate.toISOString(),
          paymentRef,
          secretKey,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setStatus('success');
      setMessage(result.message);
    } catch (error) {
      setStatus('idle');
      const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
      setError(message);
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
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-brand-dark-blue mb-6">Confirm Payment &amp; Issue Certificate</h1>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="space-y-3 mb-8 border-b pb-4">
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
                <label className="block text-sm font-medium text-gray-700">EVC Payment Date &amp; Time</label>
                <DatePicker
                  selected={paymentDate}
                  onChange={(date) => setPaymentDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  timeIntervals={15}
                  dateFormat="dd/MM/yyyy h:mm aa"
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

          <div>
            <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Uploaded Documents</h2>
            <DocumentViewer bucket="id-documents" path={idPath} label="ID Document (Passport / NIRA)" secretKey={secretKey} />
            <DocumentViewer bucket="photos" path={photoPath} label="Passport-size Photo" secretKey={secretKey} />
            {licensePath && (
              <DocumentViewer bucket="license-documents" path={licensePath} label="Business License" secretKey={secretKey} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminConfirmationPage;
