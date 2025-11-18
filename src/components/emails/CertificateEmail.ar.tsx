import React from 'react';
import { EmailSeal, EmailSignature } from '@/components/emails/EmailSignatureSeal';

interface CertificateEmailProps {
  name: string;
  poBoxNumber: string;
  expiryDate: string;
  serialNumber: string;
}

export const CertificateEmailArabic: React.FC<Readonly<CertificateEmailProps>> = ({
  name,
  poBoxNumber,
  expiryDate,
  serialNumber,
}) => (
  <div style={{ width: '100%', backgroundColor: '#f0f2f5', padding: '40px 0' }}>
    <div
      dir="rtl"
      style={{
        width: '210mm',
        height: '297mm',
        margin: '0 auto',
        backgroundColor: 'white',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        position: 'relative',
        border: '10px solid #0D47A1',
        padding: '40px',
        fontFamily: 'Tahoma, Arial, sans-serif',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: '0.05',
          zIndex: 0,
        }}
      >
        <img src="https://posta.so/images/somali-post-logo.png" alt="علامة مائية" width="400" />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <header
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '2px solid #0D47A1',
            paddingBottom: '20px',
          }}
        >
          <div>
            <img src="https://posta.so/images/ministry-logo.png" alt="شعار الوزارة" width="100" />
          </div>
          <div style={{ textAlign: 'center', color: '#0D47A1' }}>
            <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 'bold' }}>جمهورية الصومال الفيدرالية</h1>
            <p style={{ margin: 0, fontSize: '16px' }}>وزارة الإتصالات والتكنولوجيا</p>
          </div>
          <div>
            <img src="https://posta.so/images/somali-post-logo.png" alt="شعار البريد الصومالي" width="100" />
          </div>
        </header>
        <div style={{ textAlign: 'center', margin: '60px 0' }}>
          <p style={{ margin: 0, fontSize: '14px', textTransform: 'uppercase', color: '#555' }}>
            رقم الشهادة: {serialNumber}
          </p>
          <h2 style={{ margin: '10px 0', fontSize: '36px', color: '#0D47A1' }}>شهادة تأجير صندوق بريد</h2>
          <p style={{ margin: 0, fontSize: '24px', color: '#333' }}>شهادة رسمية لصندوق بريد البريد الصومالي</p>
        </div>
        <div style={{ fontSize: '18px', lineHeight: '1.8' }}>
          <p>تشهد هذه الوثيقة بأن</p>
          <p
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#0D47A1',
              textAlign: 'center',
              margin: '20px 0',
            }}
          >
            {name}
          </p>
          <p>مخول باستئجار صندوق البريد الحكومي الصومالي وفق التفاصيل التالية:</p>
          <div
            style={{
              margin: '40px 0',
              textAlign: 'center',
              border: '1px solid #eee',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <p style={{ fontSize: '20px' }}>
              رقم صندوق البريد: <strong style={{ fontSize: '32px', color: '#0D47A1' }}>{poBoxNumber}</strong>
            </p>
            <p style={{ fontSize: '16px', color: '#555' }}>الموقع: هدّان، مقديشو - الصومال</p>
          </div>
          <p>
            تظل هذه الشهادة سارية حتى: <strong>{expiryDate}</strong>
          </p>
        </div>
        <footer
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '40px',
            right: '40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div>
            <EmailSignature />
            <p style={{ margin: '0', borderTop: '1px solid #333', paddingTop: '5px', fontWeight: 'bold' }}>سعيد أحمد حسن</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>مدير البريد</p>
          </div>
          <EmailSeal />
        </footer>
      </div>
    </div>
  </div>
);
