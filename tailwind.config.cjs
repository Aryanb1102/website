/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#0b0d12',
        graphite: '#121622',
        ink: '#0f1118',
        slateGlow: '#1a2233',
        accentBlue: '#4f7cff',
        accentViolet: '#7b61ff',
        accentTeal: '#4fd1c5',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(79, 124, 255, 0.25)',
        soft: '0 20px 60px rgba(9, 13, 24, 0.35)',
      },
      borderRadius: {
        xl: '1.25rem',
        '2xl': '1.75rem',
      },
      maxWidth: {
        container: '75rem',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top, rgba(79, 124, 255, 0.25), transparent 55%), radial-gradient(circle at 20% 20%, rgba(123, 97, 255, 0.18), transparent 45%), linear-gradient(120deg, rgba(13, 17, 30, 0.9), rgba(9, 11, 20, 0.95))',
        'accent-sheen': 'linear-gradient(120deg, rgba(79, 124, 255, 0.2), rgba(123, 97, 255, 0.1))',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        shimmer: 'shimmer 10s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};