import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  fonts: {
    heading: 'Georgia, Times, Times New Roman, serif',
    body: "'Nunito Sans', sans-serif;",
    size: {
      extraSmall: '0.75rem',
      small: '0.875rem',
      normal: '1rem',
      medium: '1.25rem',
      large: '1.5rem',
      extraLarge: '2rem',
    },
    weight: {
      thin: '100',
      extralight: '200',
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
      black: '900',
    },
  },
  colors: {
    primary: '#1DB954',
    secondary: '#191414',
    accent: '#212121',
    tertiary: '#121212',
    subdued: '#181818',
    fill:'#FFFFFFB3',
    text: {
      primary: '#ffffff',
      secondary: '#535353',
      tertiary: '#FFFFFFE6',
      subdued: '#a7a7a7',
    },
  },
});
