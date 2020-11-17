import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop';

const NavLinkContainer = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colour.white};
  padding-top: ${({ theme }) => theme.spacer['xl']};
  padding-bottom: ${({ theme }) => theme.spacer[10]};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const NavLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  color: ${({ theme }) => theme.colour.primaryFont};
  margin-bottom: ${({ theme }) => theme.spacer[8]};
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

const UnstyledButton = styled.button`
  font-size: 100%;
  font-family: inherit;
  border: 0;
  padding: 0;
  background-color: inherit;
  position: absolute;
  z-index: 300;
  right: ${({ theme }) => theme.spacer[7]};
  top: ${({ theme }) => theme.spacer[10]};
`;

interface TopDrawerProps {
  show: boolean;
  close: () => void;
}

const TopDrawer: React.FC<TopDrawerProps> = ({ show, close }) => {
  return (
    <>
      <Backdrop show={show} clicked={close} />
      {show && (
        <NavLinkContainer>
          <UnstyledButton type="button" onClick={close}>
            <FontAwesomeIcon size="3x" color="#020202" icon={faTimes} />
          </UnstyledButton>
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
      )}
    </>
  );
};
export default TopDrawer;
