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
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d8ff',
          300: '#a4bbff',
          400: '#7c93ff',
          500: '#5b69ff',
          600: '#4247f5',
          700: '#3234d0',
          800: '#2a2ba8',
          900: '#262a85',
          950: '#0d0e2e',
        },
      },
    },
  },
  plugins: [],
}
export default config
