import React from 'react';

// --- NEW: Props now include the customer's location ---
interface CertificateEmailProps {
  name: string;
  poBoxNumber: string;
  expiryDate: string;
  serialNumber: string;
  location: string;
}

// For images to work in all email clients, they MUST use absolute URLs to where they are hosted on your live site.
const MINISTRY_LOGO_URL = 'https://posta.so/images/ministry-logo.png';
const POST_LOGO_URL = 'https://posta.so/images/somali-post-logo.png';

// SVG simulation of a digitized signature
const Signature = () => (
  <svg
    viewBox="0 0 400 100"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '150px', height: 'auto', marginBottom: '-10px' }}
  >
    <path
      d="M 10,70 C 20,40 40,40 50,70 S 70,100 80,70 S 100,40 110,70 S 130,100 140,70 S 160,40 170,70 C 180,100 190,80 200,60 C 210,40 230,40 240,60 S 260,80 270,60 S 290,40 300,60 S 320,80 330,60 L 350,80"
      fill="none"
      stroke="#0D47A1"
      strokeWidth="2.5"
    />
  </svg>
);

export const CertificateEmail: React.FC<Readonly<CertificateEmailProps>> = ({
  name,
  poBoxNumber,
  expiryDate,
  serialNumber,
  location,
}) => (
  <div style={{ backgroundColor: '#f0f2f5', padding: '40px 0', fontFamily: 'serif' }}>
    <div
      style={{
        width: '297mm',
        height: '210mm',
        margin: '0 auto',
        backgroundColor: 'white',
        boxShadow: '0 0 15px rgba(0,0,0,0.1)',
        position: 'relative',
        overflow: 'hidden',
        border: '2px solid #0D47A1',
      }}
    >
      {/* Ornate Border */}
      <div
        style={{
          position: 'absolute',
          top: '15px',
          right: '15px',
          bottom: '15px',
          left: '15px',
          border: '8px double #0D47A1',
        }}
      ></div>

      {/* Watermark */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0.05,
          zIndex: 1,
        }}
      >
        <img src={POST_LOGO_URL} alt="Watermark" width="400" />
      </div>

      <div style={{ position: 'relative', zIndex: 2, padding: '40px 60px' }}>
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
            <img src={MINISTRY_LOGO_URL} alt="Ministry Logo" style={{ height: '80px', width: 'auto' }} />
          </div>
          <div style={{ textAlign: 'center', color: '#0D47A1' }}>
            <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold' }}>JAMHUURIYADDA FEDERAALKA SOOMAALIYA</h1>
            <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>WASAARADDA ISGAARSIINTA & TEKNOLOJIYADA</p>
          </div>
          <div>
            <img src={POST_LOGO_URL} alt="Somali Post Logo" style={{ height: '80px', width: 'auto' }} />
          </div>
        </header>

        <div style={{ textAlign: 'center', margin: '50px 0' }}>
          <p style={{ margin: 0, fontSize: '14px', letterSpacing: '1px' }}>SERIAL NUMBER: {serialNumber}</p>
          <h2 style={{ margin: '10px 0', fontSize: '32px', color: '#0D47A1', fontWeight: 'bold' }}>
            Shahaadada Ijaarka Sanduuqa Boostada
          </h2>
          <p style={{ margin: 0, fontSize: '20px', color: '#333' }}>(P.O. Box Rental Certificate)</p>
        </div>

        <div style={{ fontSize: '18px', lineHeight: '1.8', textAlign: 'center' }}>
          <p>This is to certify that / Waxaa lagu shahaadeynayaa in</p>
          <p
            style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#0D47A1',
              margin: '20px 0',
            }}
          >
            {name}
          </p>
          <p>is authorized to rent the Somali Government P.O. Box with the following details:</p>
          <div
            style={{
              margin: '30px auto',
              width: '70%',
              backgroundColor: '#f9f9f9',
              border: '1px dashed #ccc',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <p style={{ fontSize: '20px', margin: 0 }}>
              P.O. Box Number:{' '}
              <strong style={{ fontSize: '40px', color: '#0D47A1' }}>
                {poBoxNumber}
              </strong>
            </p>
            {/* --- NEW: Dynamically includes the user's location --- */}
            <p style={{ fontSize: '16px', color: '#555' }}>Location: {location}, Muqdisho-Somalia</p>
          </div>
          <p>
            This certificate is valid until / Shahaadadu waxay ku eg-tahay:{' '}
            <strong>{new Date(expiryDate).toLocaleDateString('en-GB')}</strong>
          </p>
        </div>

        <footer
          style={{
            position: 'absolute',
            bottom: '60px',
            left: '60px',
            right: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <Signature />
            <p style={{ margin: '0', borderTop: '1px solid #333', paddingTop: '5px', fontWeight: 'bold' }}>Saciid Axmed Xassan</p>
            <p style={{ margin: '0', fontSize: '14px', color: '#555' }}>Agaasimaha Boostada</p>
          </div>
          <div
            style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              border: '4px double #0D47A1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={POST_LOGO_URL} alt="Seal" style={{ width: '60px', height: 'auto' }} />
          </div>
        </footer>
      </div>
    </div>
  </div>
);
