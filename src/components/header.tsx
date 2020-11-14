import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

interface HeaderProps {
  siteTitle: string;
}

const StyledHeader = styled.header`
  background: ${({ theme }) => theme.colour.primary};
  margin-bottom: '1.45rem';
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 1.45rem 1.0875rem;
`;

const Header: React.FC<HeaderProps> = ({ siteTitle = '' }) => (
  <StyledHeader>
    <Container>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Container>
  </StyledHeader>
);

export default Header;
