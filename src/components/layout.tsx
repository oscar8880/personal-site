import React from 'react';

import Header from './Header';
import { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '../theme/globalStyles';
import PageWrapper from './PageWrapper';
import Footer from './Footer';
import { setConfiguration } from 'react-grid-system';

setConfiguration({
  gutterWidth: 40,
});

const Layout: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Layout;
