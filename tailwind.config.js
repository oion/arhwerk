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
