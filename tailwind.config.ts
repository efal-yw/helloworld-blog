import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    './articles/**/*.{md,mdx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    typography,
  ],
}

export default config
