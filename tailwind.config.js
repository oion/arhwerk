export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.ts',
    './app.vue',
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: [ "Lexend"]
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#fff',
        'black': '#000',
        'neutral': {
          light: 'rgb(244, 244, 244)',
          DEFAULT: 'rgb(237, 237, 237)',
          dark: '#e8e8e8'
        },
        'primary': {
          light: '#aaa',
          DEFAULT: '#333',
          dark: '#444'
        }
      },
      animation: {
        bounce: 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        bounce: {
          '0%, 100%': { transform: 'translateY(-50%)' },
          '50%': { transform: 'translateY(0%)' },
        }
      }
    },
    
  },
};
