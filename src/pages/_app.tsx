import type { AppProps } from 'next/app';

// --- THIS IS THE FIX ---
// The path is now '@/styles/globals.css' instead of '@/src/styles/globals.css'
import '@/styles/globals.css';
// ----------------------

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
