// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css' // Note: Ensure your globals.css is in src/app, not src/styles
import { LanguageProvider } from '@/context/LanguageContext'

// This configures the Inter font with the subsets we need
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // This connects the font to Tailwind CSS
})

export const metadata: Metadata = {
  title: 'Posta.so - Somali Postal Service',
  description: 'Reconnecting Somalia to the world. Track parcels, rent P.O. Boxes, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* The font variable is applied to the body tag */}
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
