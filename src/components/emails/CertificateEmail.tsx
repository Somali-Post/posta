import React from 'react';

interface CertificateEmailProps {
  name: string;
  boxType: string;
  poBoxNumber: string; // We'll generate a placeholder for now
  issueDate: string;
}

export const CertificateEmail: React.FC<Readonly<CertificateEmailProps>> = ({ name, boxType, poBoxNumber, issueDate }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', lineHeight: '1.6', color: '#333', backgroundColor: '#f4f4f4', padding: '20px' }}>
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px' }}>
      <div style={{ backgroundColor: '#0D47A1', color: '#fff', padding: '20px', textAlign: 'center', borderRadius: '8px 8px 0 0' }}>
        <h1 style={{ margin: '0', fontSize: '24px' }}>Somali National Postal Service</h1>
      </div>
      <div style={{ padding: '30px' }}>
        <h2 style={{ color: '#0D47A1', textAlign: 'center', fontSize: '28px', marginBottom: '10px' }}>Official P.O. Box E-Certificate</h2>
        <p style={{ textAlign: 'center', fontSize: '16px', color: '#555' }}>This document certifies that:</p>
        <p style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', margin: '20px 0' }}>{name}</p>
        <p style={{ textAlign: 'center', fontSize: '16px', color: '#555' }}>is the registered holder of the following Somali Post P.O. Box:</p>
        <div style={{ backgroundColor: '#f9f9f9', border: '1px dashed #ccc', padding: '20px', margin: '20px 0', textAlign: 'center' }}>
          <p style={{ margin: '0 0 5px 0', fontSize: '14px', textTransform: 'uppercase', color: '#777' }}>P.O. Box Number</p>
          <p style={{ margin: '0', fontSize: '32px', fontWeight: 'bold', color: '#0D47A1' }}>{poBoxNumber}</p>
          <p style={{ margin: '10px 0 0 0', fontSize: '14px', textTransform: 'uppercase', color: '#777' }}>Box Type: {boxType}</p>
        </div>
        <p style={{ textAlign: 'center', fontSize: '14px', color: '#777' }}>Issued on: {issueDate}</p>
      </div>
      <div style={{ backgroundColor: '#f4f4f4', padding: '15px', textAlign: 'center', fontSize: '12px', color: '#888', borderRadius: '0 0 8px 8px' }}>
        <p style={{ margin: '0' }}>Thank you for using the Somali National Postal Service.</p>
        <p style={{ margin: '5px 0 0 0' }}>posta.so</p>
      </div>
    </div>
  </div>
);
