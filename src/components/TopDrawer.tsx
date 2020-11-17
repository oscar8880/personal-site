import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop';
import { useSpring, animated } from 'react-spring';
import NavLink from './NavLink';

const NavLinkContainer = styled(animated.div)`
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
  const props = useSpring({
    marginTop: show ? 0 : -100,
  });

  return (
    <>
      <Backdrop show={show} clicked={close} />
      {show && (
        <NavLinkContainer style={props}>
          <UnstyledButton type="button" onClick={close}>
            <FontAwesomeIcon size="3x" color="#020202" icon={faTimes} />
          </UnstyledButton>
          <NavLink size="mobile" to="/" activeClassName="active">
            Home
          </NavLink>
          <NavLink size="mobile" to="/blog" activeClassName="active">
            Blog
          </NavLink>
          <NavLink size="mobile" to="/credits" activeClassName="active">
            Credits
          </NavLink>
        </NavLinkContainer>
      )}
    </>
  );
};
export default TopDrawer;
