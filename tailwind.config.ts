// tailwind.config.ts
import type { Config } from 'tailwindcss'
const { fontFamily } = require('tailwindcss/defaultTheme') // Make sure to require the default theme

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-dark-blue': '#0D47A1',
        'dark-text': '#1E293B',
        'light-gray': '#F8FAFC',
        'border-gray': '#E2E8F0',
        // Legacy utility names still used across components
        'somali-blue': '#0D47A1',
        'accent-blue': '#89B9ED',
      },
      // --- THIS IS THE FONT FIX ---
      // This tells the default 'font-sans' class to use our '--font-inter'
      // variable first, with fallback system fonts.
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      // --------------------------
      animation: {
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
export default config
