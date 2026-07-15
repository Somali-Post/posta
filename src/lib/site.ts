export const siteConfig = {
  name: 'Somali Post',
  legalName: 'Somali Postal Service',
  url: 'https://posta.so',
  description:
    'Somalia national postal service for receiving international mail, tracking postal items and official postal guidance.',
  email: 'postalservice@moct.gov.so',
  address: 'Mogadishu, Somalia',
  contact: {
    phoneDisplay: '+252 61 100 3239',
    phoneHref: 'tel:+252611003239',
    whatsappHref: 'https://wa.me/252611003239',
  },
  socialLinks: [
    {
      key: 'facebook',
      label: 'Somali Post on Facebook',
      href: 'https://www.facebook.com/postasomalia/',
    },
    {
      key: 'instagram',
      label: 'Somali Post on Instagram',
      href: 'https://www.instagram.com/adeegga_boostada_soomaaliya/',
    },
    {
      key: 'x',
      label: 'Somali Post on X',
      href: 'https://x.com/Somalipostal',
    },
    {
      key: 'tiktok',
      label: 'Somali Post on TikTok',
      href: 'https://www.tiktok.com/@adeegga_boostada_somalia',
    },
  ] as const,
};

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/send-to-somalia', label: 'Send to Somalia' },
  { href: '/track', label: 'Track an Item' },
  { href: '/about', label: 'About Us' },
  { href: '/help', label: 'Help' },
];

export const serviceLinks = [
  { href: '/services/receiving', label: 'Receiving International Mail' },
  { href: '/services/po-box', label: 'P.O. Boxes' },
  { href: '/services/rug-pudo', label: 'RUG PUDO' },
];

export const publicRoutes = [
  '/',
  '/send-to-somalia',
  '/services/receiving',
  '/services/po-box',
  '/services/rug-pudo',
  '/track',
  '/about',
  '/help',
  '/contact',
  '/privacy',
  '/terms',
  '/accessibility',
];
