import React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '../theme/globalStyles';
import PageWrapper from './PageWrapper';

const Layout: React.FC = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  const Footer = styled.footer`
    margin-top: 2rem;
  `;

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <PageWrapper>
        <Header />
        <main>{children}</main>
        <Footer
          style={{
            marginTop: '2rem',
          }}
        >
          © {new Date().getFullYear()}, Built with{' '}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
      </PageWrapper>
    </ThemeProvider>
  );
};

export default Layout;
