import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#10234F',
          900: '#172D5B',
          800: '#203A70',
        },
        gold: {
          500: '#D9AE21',
          400: '#E8C44C',
        },
        surface: {
          DEFAULT: '#FFFFFF',
          soft: '#F6F8FC',
        },
        border: '#DDE3ED',
        ink: {
          DEFAULT: '#172033',
          muted: '#667085',
        },
      },
      fontFamily: {
        sans: ['Manrope Variable', ...fontFamily.sans],
      },
      boxShadow: {
        soft: '0 18px 50px rgba(16, 35, 79, 0.10)',
        card: '0 10px 30px rgba(16, 35, 79, 0.08)',
      },
    },
  },
  plugins: [],
};

export default config;
