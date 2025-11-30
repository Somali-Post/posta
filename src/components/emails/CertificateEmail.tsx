import React from 'react';

const MINISTRY_LOGO_URL = 'https://posta.so/images/ministry-logo.png';
const POST_LOGO_URL = 'https://posta.so/images/somali-post-logo.png';
const BORDER_URL = 'https://posta.so/images/certificate-border.png';
const WATERMARK_URL = 'https://posta.so/images/somali-post-logo.png';

interface CertificateEmailProps {
  name: string;
  poBoxNumber: string;
  expiryDate: string;
  serialNumber: string;
}

export const CertificateEmail: React.FC<Readonly<CertificateEmailProps>> = ({
  name,
  poBoxNumber,
  expiryDate,
  serialNumber,
}) => (
  <div style={{ backgroundColor: '#f0f2f5', padding: '20px', fontFamily: 'Georgia, serif' }}>
    <table
      cellPadding="0"
      cellSpacing="0"
      style={{
        width: '1123px',
        margin: '0 auto',
        backgroundColor: 'white',
        backgroundImage: `url(${BORDER_URL})`,
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <tbody>
        <tr>
          <td style={{ padding: '40px 60px', position: 'relative' }}>
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
              <img src={WATERMARK_URL} alt="Watermark" width="400" />
            </div>

            <table cellPadding="0" cellSpacing="0" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
              <tbody>
                <tr>
                  <td colSpan={3} style={{ borderBottom: '2px solid #0D47A1', paddingBottom: '20px' }}>
                    <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '20%', textAlign: 'left' }}>
                            <img src={MINISTRY_LOGO_URL} alt="Ministry Logo" style={{ height: '80px' }} />
                          </td>
                          <td style={{ width: '60%', textAlign: 'center', color: '#0D47A1' }}>
                            <h1 style={{ margin: 0, fontSize: '22px', fontWeight: 'bold' }}>
                              JAMHUURIYADDA FEDERAALKA SOOMAALIYA
                            </h1>
                            <p style={{ margin: '5px 0 0 0', fontSize: '14px' }}>WASAARADDA ISGAARSIINTA &amp; TEKNOLOJIYADA</p>
                          </td>
                          <td style={{ width: '20%', textAlign: 'right' }}>
                            <img src={POST_LOGO_URL} alt="Somali Post Logo" style={{ height: '80px' }} />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td colSpan={3} style={{ textAlign: 'right', paddingTop: '15px', fontSize: '14px', color: '#333' }}>
                    S/N: {serialNumber}
                  </td>
                </tr>

                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', padding: '40px 0' }}>
                    <h2 style={{ margin: 0, fontSize: '36px', color: '#0D47A1', fontWeight: 'bold' }}>
                      Shahaadada Ijaarka Sanduuqa Boostada
                    </h2>
                    <p style={{ margin: '5px 0 20px 0', fontSize: '24px', color: '#333' }}>(P.O. Box Rental)</p>
                    <p
                      style={{
                        fontSize: '28px',
                        fontWeight: 'bold',
                        color: '#0D47A1',
                        borderTop: '1px solid #ddd',
                        borderBottom: '1px solid #ddd',
                        padding: '10px 0',
                      }}
                    >
                      {name.toUpperCase()}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td colSpan={3} style={{ textAlign: 'center', fontSize: '18px', lineHeight: '1.8', color: '#333' }}>
                    <p style={{ margin: '0 auto', maxWidth: '80%' }}>
                      Waxaad Mutaysatay in lagaa ijaaro sanduuqa boostada dowladda Soomaaliya oo lambarkiisu yahay P.O.
                      Box <strong>{poBoxNumber}</strong>, Muqdisho-Somalia.
                    </p>
                    <p style={{ marginTop: '30px' }}>
                      Muddada: {new Date().toLocaleDateString('en-GB')} -{' '}
                      {new Date(expiryDate).toLocaleDateString('en-GB')}
                    </p>
                  </td>
                </tr>

                <tr>
                  <td colSpan={3} style={{ paddingTop: '80px' }}>
                    <table cellPadding="0" cellSpacing="0" style={{ width: '100%' }}>
                      <tbody>
                        <tr>
                          <td style={{ width: '50%', textAlign: 'left', verticalAlign: 'bottom' }}>
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
                            <p style={{ margin: 0, borderTop: '1px solid #333', paddingTop: '5px', fontWeight: 'bold' }}>
                              Saciid Axmed Xassan
                            </p>
                            <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>Agaasimaha Boostada</p>
                          </td>
                          <td style={{ width: '50%', textAlign: 'right', verticalAlign: 'bottom' }}>
                            <div
                              style={{
                                width: '120px',
                                height: '120px',
                                borderRadius: '50%',
                                backgroundColor: '#89B9ED',
                                display: 'inline-block',
                              }}
                            ></div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
);
