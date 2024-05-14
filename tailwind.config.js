/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'ralewaythin': ['Raleway-Thin'],
      'ralewaythinitalic': ['Raleway-ThinItalic'],
      'gentium' : ['Gentium Book Plus'],
      'circular-book' : ['Circular Std Book'],
      'circular-medium' : ['Circular Std Medium'],
      'monotony': ['Monotony'],
    },
    backgroundImage: {
      'bannerBg': "linear-gradient(to bottom, rgba(46, 44, 109, 0.7), rgba(61, 164, 75, 0.7)), url('../src/assets/img/bannerBackground.svg')",
      'demobg': "linear-gradient(to bottom, rgba(231, 254, 225, 1.0), rgba(255, 255, 255, 1.0))",
      // 'counterbg': "linear-gradient(to bottom,rbga(30, 48, 122, 1.0), rbga(30, 48, 122, 1.0)), url('../src/assets/img/counter.svg')",
      'counter':"url('../src/assets/img/counter1.svg')",
      'testbg': "linear-gradient(to bottom, rgba(255, 255, 255, 1.0), rgba(231, 254, 225, 1.0))",
      'clientbg': "url('../src/assets/img/clientBanner.svg'), linear-gradient(to bottom, rgba(18, 29, 75, 1.0), rgba(18, 29, 75, 1.0))",
      'footer': "url('../src/assets/img/footerimg.svg'), linear-gradient(to bottom, rgba(18, 29, 75, 1.0), rgba(18, 29, 75, 1.0))"
    },
    animation: {
      'text-slide-7': 'text-slide-7 17.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
    },
    keyframes: {
      'text-slide-7': {
        '0%, 11.43%': {
            transform: 'translateY(0%)',
        },
        '14.28%, 25.71%': {
            transform: 'translateY(-12.5%)',
        },
        '28.57%, 40%': {
            transform: 'translateY(-25%)',
        },
        '42.85%, 54.28%': {
            transform: 'translateY(-37.5%)',
        },
        '57.14%, 68.57%': {
            transform: 'translateY(-50%)',
        },
        '71.42%, 82.85%': {
            transform: 'translateY(-62.5%)',
        },
        '85.71%, 97.14%': {
            transform: 'translateY(-75%)',
        },
        '100%': {
            transform: 'translateY(-87.5%)',
        },
    },
  },
  },
  plugins: [
  ],
}

