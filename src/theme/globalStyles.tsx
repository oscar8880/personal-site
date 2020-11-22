import { createGlobalStyle, DefaultTheme } from 'styled-components';
import reset from 'styled-reset';

const rem = (pixels: number, base = 16): string => {
  return `${pixels / base}rem`;
};

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      default: string;
    };
    colour: {
      primaryFont: string;
      pink: string;
      green: string;
      yellow: string;
      blue: string;
      white: string;
      black: string;
      grey100: string;
      grey200: string;
      grey300: string;
      grey400: string;
      grey500: string;
      grey600: string;
      grey700: string;
      grey800: string;
      grey900: string;
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
    breakpoint: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    transition: {
      default: string;
    };
  }
}

export const defaultTheme: DefaultTheme = {
  font: {
    default: 'Open Sans, sans-serif;',
  },
  colour: {
    primaryFont: '#020202',
    pink: '#EF476F',
    green: '#06D6A0',
    yellow: '#FFD166',
    blue: '#1FB7EA',
    white: '#fff',
    black: '#000',
    grey100: '#f2f6ff',
    grey200: '#ebebeb',
    grey300: '#d3d3d3',
    grey400: '#b1b4b6',
    grey500: '#888',
    grey600: '#717171',
    grey700: '#6b6b6b',
    grey800: '#333',
    grey900: '#020202',
  },
  fontSize: {
    xs: rem(12),
    sm: rem(14),
    base: rem(16),
    lg: rem(18),
    xl: rem(21),
    '2xl': rem(22),
    '3xl': rem(24),
    '4xl': rem(36),
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
    xl: '64px',
    '2xl': '120px',
  },
  breakpoint: {
    sm: '0',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
  },
  transition: {
    default: 'all 0.35s cubic-bezier(0, 0.75, 0.25, 1)',
  },
};

export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
    box-sizing: border-box;
  }
  html,
  body {
    scroll-behavior: smooth;
    background-color: ${({ theme }) => theme.colour.white};
    color: ${({ theme }) => theme.colour.primaryFont};
    font-family: ${({ theme }) => theme.font.default};
  }
  p,h1,h2,h3,h4,h5,h6 {
    margin: 0;
    padding: 0;
    line-height: 1.17;
  }
`;
