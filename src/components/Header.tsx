import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import NavLink from './NavLink';
import TopDrawer from './TopDrawer';
import { H1 } from './Typography';

const StyledHeader = styled.header`
  padding-left: ${({ theme }) => theme.spacer[6]};
  padding-right: ${({ theme }) => theme.spacer[6]};
  padding-top: ${({ theme }) => theme.spacer[6]};
  padding-bottom: ${({ theme }) => theme.spacer[6]};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding-left: ${({ theme }) => theme.spacer[0]};
    padding-right: ${({ theme }) => theme.spacer[0]};
    padding-top: ${({ theme }) => theme.spacer['xl']};
    padding-bottom: ${({ theme }) => theme.spacer['xl']};
  }
`;

const StyledSpan = styled.span`
  color: ${({ theme }) => theme.colour.grey500};
  display: block;
`;

const BurgerContainer = styled.div`
  display: initial;
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    display: none;
  }
`;

const UnstyledButton = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  background-color: inherit;
`;

const NavLinkContainer = styled.ul`
  display: none;
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    display: initial;
  }
`;

const UnstyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <StyledHeader>
      <UnstyledLink to="/">
        <H1>
          Oscar<StyledSpan>Zealley</StyledSpan>
        </H1>
      </UnstyledLink>

      <BurgerContainer>
        <UnstyledButton
          title="Open Navigation Menu"
          type="button"
          onClick={() => setShowMenu(true)}
        >
          <FontAwesomeIcon
            size="3x"
            color="#020202"
            icon={faBars}
            title="Open Navigation Menu"
          />
        </UnstyledButton>
      </BurgerContainer>
      <NavLinkContainer>
        <NavLink size="desktop" to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink size="desktop" to="/credits" activeClassName="active">
          Credits
        </NavLink>
      </NavLinkContainer>
      <TopDrawer show={showMenu} close={() => setShowMenu(false)} />
    </StyledHeader>
  );
};

export default Header;
