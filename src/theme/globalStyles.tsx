import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      default: string;
    };
    colour: {
      primary: string;
      secondary: string;
      primaryDark: string;
      white: string;
      black: string;
      grey: {
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
      };
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
      '5xl': string;
      '6xl': string;
    };
    fontWeight: {
      light: string;
      normal: string;
      bold: string;
    };
    spacer: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      10: string;
      11: string;
      12: string;
      xl: string;
      '2xl': string;
    };
  }
}

export const defaultTheme: DefaultTheme = {
  font: {
    default: 'Open Sans, sans-serif;',
  },
  colour: {
    primary: '#983FA2',
    secondary: '#00a2b8',
    primaryDark: '#1c0221',
    white: '#fff',
    black: '#000',
    grey: {
      100: '#f2f6ff',
      200: '#ebebeb',
      300: '#d3d3d3',
      400: '#b1b4b6',
      500: '#888',
      600: '#717171',
      700: '#6b6b6b',
      800: '#333',
      900: '#020202',
    },
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem',
  },
  fontWeight: {
    light: '300',
    normal: '400',
    bold: '700',
  },
  spacer: {
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    7: '28px',
    8: '32px',
    9: '36px',
    10: '40px',
    11: '44px',
    12: '48px',
    xl: '80px',
    '2xl': '120px',
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html,
  body {
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colour.grey[100]};
    color: ${({ theme }) => theme.colour.grey[900]};
    font-family: ${({ theme }) => theme.font.default};
  }
  p,h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
  }
`;
