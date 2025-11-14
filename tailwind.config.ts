// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'somali-blue': '#4189DD',
        'accent-blue': '#89B9ED',
        'dark-text': '#1E293B',
        'light-gray': '#F8FAFC',
        'border-gray': '#E2E8F0',
      },
      animation: {
        // UPDATED: Duration changed from 40s to a much faster 25s
        'infinite-scroll': 'infinite-scroll 15s linear infinite',
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
