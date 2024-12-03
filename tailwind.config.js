/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'dancing-script': ['var(--font-dancing-script)'],
      },
      colors: {
        mandarin: '#F6724B',
        coral: '#FC8A55',
        spicymix: '#8F4E51',
        outerspace: '#2B3349',
        indigo: '#223C63'
      }
    },
  },
  plugins: [],
}

