module.exports = {
  prefix: '',
  purge: {
    enabled: process.env.TAILWIND_MODE === 'build',
    content: ['./src/**/*.{html,ts}', './projects/**/*.{html,ts}'],
  },
  darkMode: 'class',
  theme: {

    fontFamily: {
      display: ['Oswald', 'sans-serif'],
      body: ['Poppins', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        pink: {
          450: '#FF66DD'
        },
        orange: {
          450: '#FF9838'
        },
        red: {
          DEFAULT: '#CC0505'
        },
        grey: {
          DEFAULT: '#7D7D7D'
        },
        green: {
          DEFAULT: '#05CC9A'
        }
      },
      color: {
        inherit: 'inherit',
      },
    },
  },
  variants: {},
  plugins: [],
};