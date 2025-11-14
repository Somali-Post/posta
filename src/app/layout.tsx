// src/app/layout.tsx

import type { ReactNode } from 'react';
import type { Metadata } from 'next';

import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Somali Post',
  description: 'Official Somali Post services and information portal.',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
