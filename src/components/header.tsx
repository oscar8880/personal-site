import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
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
  color: ${({ theme }) => theme.colour.grey[500]};
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

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  color: ${({ theme }) => theme.colour.primaryFont};
  margin-left: ${({ theme }) => theme.spacer[7]};
  position: relative;
  &.active {
    ::after {
      content: '';
      position: absolute;
      height: 5px;
      bottom: -8px;
      right: 0;
      width: 100%;
      background-color: ${({ theme }) => theme.colour.pink};
    }
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
        <UnstyledButton type="button" onClick={() => setShowMenu(true)}>
          <FontAwesomeIcon size="3x" color="#020202" icon={faBars} />
        </UnstyledButton>
      </BurgerContainer>
      <NavLinkContainer>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/blog" activeClassName="active">
          Blog
        </NavLink>
        <NavLink to="/credits" activeClassName="active">
          Credits
        </NavLink>
      </NavLinkContainer>
      <TopDrawer show={showMenu} close={() => setShowMenu(false)} />
    </StyledHeader>
  );
};

export default Header;
