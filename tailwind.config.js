module.exports = {
  purge: {
    mode: 'jit', //or layers
    content: [
      'components/**/*.{vue,js}',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.{js,ts}',
      'nuxt.config.{js,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('~assets/images/heroes/hero.jpg')",
      },
      borderRadius: {
        'default': "0.25rem"
      },
      spacing: {
        'micro': '0.5rem',
        'mini': '0.75rem',
        'small': '1.5rem',
        'medium': '2.25rem',
        'big': '6rem',
        'huge': '9rem',
        'px': "1px",
        84: '21rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
      },
      screens: {
        xs: '0px',
      },
      colors: {
        'dark': '#0F0F11',
        'medium': '#292929',
        'light': '#9f9f9f',
        'subliminal': '#f5f5f5',
        'primary': '#FAB716',
        'primary-hover': '#FAA000',
        'secondary': '#FAB716',
        'secondary-hover': '#FAB716',
        'tertiary': '#FAB716',
        'tertiary-hover': '#FAB716',
      },
      animation: {
        'bounce-x': 'bounceX .5s linear infinite'
      },
      keyframes: {
        bounceX: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(5px)' }
        }
      }
    }
  },
  variants: {
    extend: {}
  }
}