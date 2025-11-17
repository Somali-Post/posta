import Image from 'next/image';

// This is an SVG simulation of a signature and a seal.
export const Signature = () => (
  <svg
    viewBox="0 0 400 100"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: '150px', height: 'auto' }}
  >
    <path
      d="M 10,70 C 20,40 40,40 50,70 S 70,100 80,70 S 100,40 110,70 S 130,100 140,70 S 160,40 170,70 C 180,100 190,80 200,60 C 210,40 230,40 240,60 S 260,80 270,60 S 290,40 300,60 S 320,80 330,60 L 350,80"
      fill="none"
      stroke="#0D47A1"
      strokeWidth="2.5"
    />
  </svg>
);

export const Seal = () => (
  <div
    style={{
      width: '100px',
      height: '100px',
      borderRadius: '50%',
      border: '3px solid #0D47A1',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
    }}
  >
    <Image src="/images/somali-post-logo.png" alt="Seal" width={60} height={60} />
    <p
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        margin: 0,
        color: '#0D47A1',
        fontWeight: 'bold',
        fontSize: '12px',
        textTransform: 'uppercase',
      }}
    >
      {/* SVG for circular text is complex, this is a clean alternative */}
    </p>
  </div>
);
