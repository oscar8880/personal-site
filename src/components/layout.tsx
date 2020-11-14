import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from './Header';
import styled, { ThemeProvider } from 'styled-components';
import { defaultTheme, GlobalStyle } from '../theme/globalStyles';

const Layout: React.FC = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const PageWrapper = styled.div`
    margin: 0 auto;
    max-width: 960;
    padding: 0 1.0875rem 1.45rem;
  `

  const Footer = styled.footer`
    margin-top: 2rem;
  `

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <PageWrapper>
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
