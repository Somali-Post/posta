import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/context/LanguageContext';

// --- THIS IS THE FIX ---
// The path is now '@/app/globals.css' so both the App Router and Pages Router share the same styles.
import '@/app/globals.css';
// ----------------------

// Load the Inter font for the Pages Router as well.
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </LanguageProvider>
  );
}
