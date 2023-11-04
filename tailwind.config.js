/*
    Type scale: type-scale.com
    (font size)
    - Scale: Perfect Fifth
    - Base font size: 19px

    Vertical rhythm: drewish.com/tools/vertical-rhythm
    (line height & margin)
    - Base font size: 19px
    - Base line height: 19px * 1,5 (from scale) = 28,5px
    - Target font sizes: font sizes defined below
  */

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{jsx,js, ts,tsx,}'],
  corePlugins: {
    preflight: true,
  },
  theme: {
    colors: {
      black: '#000',
      white: '#fff',
      primary: '#d43b5c',
      secondary: '#422781',
    },
    fontFamily: {
      sans: 'Open Sans, Verdana, Tahoma, Helvetica, sans-serif',
      serif: 'IBM Plex Serif, Georgia, Times New Roman, Times, serif',
    },
    fontSize: {
      sm: ['0.79em', '2.1985em'] /* 15.01px */,
      base: ['19px', '1.7368em'],
      lg: ['1.125em', '1.5435em'] /* 21.38px */,
      xl: ['1.255em', '1.3721em'] /* 24.05px */,
      '2xl': ['1.424em', '1.2200em'] /* 27.05px */,
      '3xl': ['1.602em', '1.0845em'] /* 30.43px */,
      '4xl': ['1.802em', '1.9276em'] /* 34.24 */,
    },
    extend: {
      spacing: {
        sm: '2.2099em',
        base: '1.4737em',
        lg: '0.9825em',
        xl: '0.6550em',
        '2xl': '0.4366em',
        '3xl': '0.2911em',
        '4xl': '0.1941em',
      },
    },
  },
  plugins: [],
};
