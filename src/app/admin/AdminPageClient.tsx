"use client";

import Link from 'next/link';
import { notFound, useSearchParams } from 'next/navigation';
import { Suspense, useEffect, useMemo, useState } from 'react';
import DatePicker from 'react-datepicker';

const isAdminPortalEnabled = process.env.NEXT_PUBLIC_ENABLE_ADMIN_PORTAL === 'true';

type ApplicationStatus = 'pending_review' | 'documents_verified' | 'certificate_sent';
type ApplicationStatusFilter = ApplicationStatus | 'all';

interface ApplicationSummary {
  id: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  box_type: string;
  payment_status: string;
  application_status: ApplicationStatus;
  created_at: string;
  po_box_number: number;
}

interface CustomerDetail extends ApplicationSummary {
  whatsapp?: string | null;
  language?: string | null;
  id_document_url: string;
  photo_url: string;
  license_document_url?: string | null;
  license_number?: string | null;
  verification_notes?: string | null;
}

const STATUS_OPTIONS: { key: ApplicationStatusFilter; label: string }[] = [
  { key: 'pending_review', label: 'Pending Review' },
  { key: 'documents_verified', label: 'Docs Verified' },
  { key: 'certificate_sent', label: 'Certificate Sent' },
  { key: 'all', label: 'All' },
];

const DocumentViewer = ({
  bucket,
  path,
  label,
  secretKey,
}: {
  bucket: string;
  path?: string | null;
  label: string;
  secretKey: string;
}) => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  useEffect(() => {
    const fetchUrl = async () => {
      if (!path) {
        setIsLoading(false);
        setUrl('');
        return;
      }
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

    fetchUrl();
  }, [bucket, path, secretKey]);

  if (!path) return null;
  if (isLoading) return <p>Loading {label}...</p>;
  if (!url) return <p>Could not load {label}.</p>;

  const isImage = /\.(jpg|jpeg|png|gif)$/i.test(path);

  const handleOpenPreview = () => {
    setIsPreviewOpen(true);
  };

  const handleClosePreview = () => {
    setIsPreviewOpen(false);
  };

  return (
    <div className="mb-4">
      <h3 className="font-semibold">{label}</h3>
      {isImage ? (
        <>
          <button
            type="button"
            onClick={handleOpenPreview}
            className="mt-2 block w-full border rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-brand-dark-blue"
          >
            <img
              src={url}
              alt={label}
              className="max-w-full h-auto object-contain cursor-zoom-in"
            />
          </button>
          {isPreviewOpen && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
              onClick={handleClosePreview}
            >
              <div
                className="relative bg-white rounded-lg p-4 shadow-2xl max-h-full max-w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  aria-label="Close preview"
                  onClick={handleClosePreview}
                  className="absolute top-2 right-2 text-white bg-black/60 rounded-full w-8 h-8 flex items-center justify-center hover:bg-black/80"
                >
                  &times;
                </button>
                <img
                  src={url}
                  alt={`${label} preview`}
                  className="max-h-[80vh] max-w-[85vw] object-contain"
                />
                <div className="mt-2 text-center">
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-brand-dark-blue underline"
                  >
                    Open original in new tab
                  </a>
                </div>
              </div>
            </div>
          )}
        </>
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

const AdminContent = () => {
  if (!isAdminPortalEnabled) {
    notFound();
  }

  const searchParams = useSearchParams();
  const customerId = searchParams.get('id');
  const secretKey = searchParams.get('secret') || '';

  const [paymentDate, setPaymentDate] = useState<Date | null>(new Date());
  const [paymentRef, setPaymentRef] = useState('');
  const [certificateError, setCertificateError] = useState('');
  const [certificateStatus, setCertificateStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [certificateMessage, setCertificateMessage] = useState('');

  const [selectedStatus, setSelectedStatus] = useState<ApplicationStatusFilter>('pending_review');
  const [applications, setApplications] = useState<ApplicationSummary[]>([]);
  const [applicationsLoading, setApplicationsLoading] = useState(false);
  const [applicationsError, setApplicationsError] = useState('');
  const [listVersion, setListVersion] = useState(0);

  const [customer, setCustomer] = useState<CustomerDetail | null>(null);
  const [customerLoading, setCustomerLoading] = useState(!!customerId);
  const [customerError, setCustomerError] = useState('');
  const [verificationNotes, setVerificationNotes] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [statusError, setStatusError] = useState('');
  const [statusLoading, setStatusLoading] = useState(false);

  useEffect(() => {
    if (!secretKey || customerId) return;
    const fetchApplications = async () => {
      setApplicationsLoading(true);
      setApplicationsError('');
      try {
        const response = await fetch('/api/admin/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            secretKey,
            status: selectedStatus === 'all' ? undefined : selectedStatus,
          }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Failed to load applications.');
        setApplications(result.applications ?? []);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to load applications.';
        setApplicationsError(message);
        setApplications([]);
      } finally {
        setApplicationsLoading(false);
      }
    };

    fetchApplications();
  }, [secretKey, selectedStatus, customerId, listVersion]);

  useEffect(() => {
    if (!secretKey || !customerId) {
      setCustomer(null);
      setCustomerError('');
      setCustomerLoading(false);
      return;
    }

    const fetchCustomer = async () => {
      setCustomerLoading(true);
      setCustomerError('');
      try {
        const response = await fetch('/api/admin/applications', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ secretKey, customerId }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Failed to load customer.');
        setCustomer(result.customer);
        setVerificationNotes(result.customer?.verification_notes ?? '');
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Failed to load customer.';
        setCustomer(null);
        setCustomerError(message);
      } finally {
        setCustomerLoading(false);
      }
    };

    fetchCustomer();
  }, [secretKey, customerId]);

  const applicationStatusLabel = useMemo(() => {
    switch (customer?.application_status) {
      case 'documents_verified':
        return 'Documents Verified';
      case 'certificate_sent':
        return 'Certificate Sent';
      default:
        return 'Pending Review';
    }
  }, [customer?.application_status]);

  const handleUpdateStatus = async (nextStatus?: ApplicationStatus) => {
    if (!customerId || !secretKey || !customer) return;
    const statusToPersist = nextStatus ?? customer.application_status;
    setStatusLoading(true);
    setStatusError('');
    setStatusMessage('');
    try {
      const response = await fetch('/api/admin/applications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secretKey,
          customerId,
          applicationStatus: statusToPersist,
          verificationNotes,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Failed to update status.');
      setCustomer((prev) =>
        prev
          ? {
              ...prev,
              application_status: result.customer.application_status as ApplicationStatus,
              verification_notes: result.customer.verification_notes,
            }
          : prev
      );
      setStatusMessage('Application updated.');
      setListVersion((prev) => prev + 1);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Failed to update status.';
      setStatusError(message);
    } finally {
      setStatusLoading(false);
    }
  };

  const handleSendCertificate = async () => {
    if (!customerId || !customer || !secretKey) return;
    if (!paymentDate) {
      setCertificateError('Payment Date & Time is required.');
      return;
    }
    setCertificateError('');
    setCertificateStatus('loading');
    setCertificateMessage('');

    try {
      const response = await fetch('/api/send-certificate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          customerId,
          poBoxNumber: customer.po_box_number,
          paymentDate: paymentDate.toISOString(),
          paymentRef,
          secretKey,
        }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error);
      setCertificateStatus('success');
      setCertificateMessage(result.message);
      setCustomer((prev) =>
        prev ? { ...prev, application_status: 'certificate_sent' } : prev
      );
      setListVersion((prev) => prev + 1);
    } catch (error) {
      setCertificateStatus('idle');
      const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
      setCertificateError(message);
    }
  };

  if (!secretKey) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-500">Access Denied.</p>
      </div>
    );
  }

  if (!customerId) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow p-6">
          <h1 className="text-3xl font-bold text-brand-dark-blue mb-6">P.O. Box Applications</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {STATUS_OPTIONS.map((option) => (
              <button
                key={option.key}
                onClick={() => setSelectedStatus(option.key)}
                className={`px-4 py-2 rounded-md text-sm font-semibold transition ${
                  selectedStatus === option.key
                    ? 'bg-brand-dark-blue text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          {applicationsLoading && <p>Loading applications...</p>}
          {applicationsError && <p className="text-red-600">{applicationsError}</p>}
          {!applicationsLoading && !applicationsError && applications.length === 0 && (
            <p>No applications found for this filter.</p>
          )}

          {!applicationsLoading && !applicationsError && applications.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Applicant
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Submitted
                    </th>
                    <th className="px-4 py-2 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {applications.map((app) => (
                    <tr key={app.id}>
                      <td className="px-4 py-2">
                        <p className="font-semibold text-gray-900">{app.name}</p>
                        <p className="text-sm text-gray-500">{app.location}</p>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-700">
                        <div>{app.email}</div>
                        <div>{app.phone}</div>
                      </td>
                      <td className="px-4 py-2 text-sm">
                        <p className="font-semibold">{app.box_type}</p>
                        <p className="text-gray-500 capitalize">{app.application_status.replace('_', ' ')}</p>
                        <p className="text-gray-500">Payment: {app.payment_status}</p>
                      </td>
                      <td className="px-4 py-2 text-sm text-gray-600">
                        {new Date(app.created_at).toLocaleString('en-GB')}
                      </td>
                      <td className="px-4 py-2 text-right">
                        <Link
                          href={`/admin?id=${app.id}&secret=${secretKey}`}
                          className="inline-flex items-center px-3 py-2 bg-brand-dark-blue text-white text-sm font-semibold rounded-md hover:bg-blue-900"
                        >
                          Review
                        </Link>
                      </td>
മെ*** End Patch
