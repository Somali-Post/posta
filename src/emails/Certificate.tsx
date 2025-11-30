import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from '@react-email/components';
import * as React from 'react';

const LOCAL_BASE =
  process.env.NEXT_PUBLIC_APP_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');
const SIGNATURE_URL = `${LOCAL_BASE}/images/signature.png`;
const MINISTRY_LOGO_URL = 'https://posta.so/images/ministry-logo.png';
const POSTA_LOGO_URL = 'https://posta.so/images/somali-post-logo.png';

interface CertificateProps {
  name?: string;
  poBoxNumber?: string;
  serialNumber?: string;
  issueDate?: string;
  expiryDate?: string;
  location?: string;
}

export const Certificate = ({
  name = 'LIBAN OSMAN',
  poBoxNumber = '635',
  serialNumber = '000/635/2025',
  issueDate = '30/11/2025',
  expiryDate = '30/11/2026',
  location = 'Hodan',
}: CertificateProps) => (
  <Html>
    <Head />
    <Preview>Your Official Somali Post P.O. Box Certificate</Preview>
    <Body style={main}>
      <Container style={container}>
        <table width="100%" cellPadding="0" cellSpacing="0">
          <tr>
            <td colSpan={3} style={{ borderBottom: '2px solid #0D47A1', paddingBottom: '20px' }}>
              <table width="100%">
                <tr>
                  <td width="20%" style={{ textAlign: 'left' }}>
                    <Img src={MINISTRY_LOGO_URL} width="120" alt="Ministry Logo" />
                  </td>
                  <td width="60%" style={{ textAlign: 'center', color: '#0D47A1' }}>
                    <Heading as="h1" style={headerTitle}>JAMHUURIYADDA FEDERAALKA SOOMAALIYA</Heading>
                    <Text style={headerSubtitle}>WASAARADDA ISGAARSIINTA &amp; TEKNOLOJIYADA</Text>
                  </td>
                  <td width="20%" style={{ textAlign: 'right' }}>
                    <Img src={POSTA_LOGO_URL} width="120" alt="Posta Logo" />
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td colSpan={3} style={serial}>S/N: {serialNumber}</td>
          </tr>

          <tr>
            <td colSpan={3} style={{ paddingTop: '32px', textAlign: 'center' }}>
              <Heading as="h2" style={title}>Shahaadada Ijaarka Sanduuqa Boostada</Heading>
              <Text style={subtitle}>(P.O. Box Rental)</Text>
              <Hr style={line} />
              <Heading as="h3" style={nameText}>{name.toUpperCase()}</Heading>
              <Hr style={line} />
              <Text style={bodyText}>
                Waxaad Mutaysatay in lagaa ijaaro sanduuqa boostada dowladda Soomaaliya oo lambarkiisu yahay
                <strong> P.O. Box {poBoxNumber}</strong>, {location}, Muqdisho-Somalia.
              </Text>
              <Text style={bodyText}>Muddada: {issueDate} - {expiryDate}</Text>
            </td>
          </tr>

          <tr>
            <td colSpan={3} style={{ paddingTop: '70px' }}>
              <table width="100%">
                <tr>
                  <td width="60%">
                    <div style={signatureBoxStyle}>
                      <Img src={SIGNATURE_URL} width="260" alt="Digital Signature" style={signatureImgStyle} />
                      <Hr style={signatureLine} />
                    </div>
                    <Text style={signatureName}>Saciid Axmed Xassan</Text>
                    <Text style={signatureTitle}>Agaasimaha Boostada</Text>
                  </td>
                  <td width="40%" style={{ textAlign: 'right' }}>
                    <div style={seal}></div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </Container>
    </Body>
  </Html>
);

export default Certificate;

const main = { backgroundColor: '#eef2fb', fontFamily: '"Palatino Linotype", "Book Antiqua", Palatino, serif' };
const container = {
  margin: '30px auto',
  padding: '70px 110px',
  width: '1123px',
  minWidth: '1123px',
  height: '794px',
  backgroundColor: '#ffffff',
  border: '14px double #0D47A1',
  boxShadow: '0 8px 26px rgba(0,0,0,0.08)',
};
const headerTitle = { margin: '0', fontSize: '30px', fontWeight: 'bold', letterSpacing: '1px' };
const headerSubtitle = { margin: '6px 0 0', fontSize: '16px', letterSpacing: '0.5px' };
const serial = { textAlign: 'right' as const, paddingTop: '16px', fontSize: '16px', color: '#555' };
const title = { margin: '0', fontSize: '42px', color: '#0D47A1', fontWeight: 'bold' };
const subtitle = { margin: '8px 0 22px', fontSize: '22px', color: '#333' };
const line = { borderColor: '#b1b1b1', margin: '18px auto', width: '92%' };
const nameText = { margin: '0', fontSize: '32px', fontWeight: 'bold', color: '#0D47A1', letterSpacing: '1px' };
const bodyText = { fontSize: '18px', lineHeight: '1.8', color: '#333', maxWidth: '80%', margin: '0 auto 18px' };
const signatureLine = { borderColor: '#333', margin: '10px 0 8px', width: '320px' };
const signatureName = { margin: '0', fontWeight: 'bold', fontSize: '16px' };
const signatureTitle = { margin: '2px 0 0', fontSize: '14px', color: '#555' };
const signatureBoxStyle: React.CSSProperties = { position: 'relative', width: '360px', paddingBottom: '10px' };
const signatureImgStyle: React.CSSProperties = {
  display: 'inline-block',
  position: 'relative',
  zIndex: 2,
  marginBottom: '-15px',
};
const seal = { width: '100px', height: '100px', borderRadius: '50%', backgroundColor: '#89B9ED', display: 'inline-block' };
