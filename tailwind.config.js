// tailwind.config.js
import scrollbar from 'tailwind-scrollbar'

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [scrollbar],
}
