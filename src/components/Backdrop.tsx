import React from 'react';
import styled from 'styled-components';

interface StyledBackdropProps {
  show: boolean;
}

const StyledBackdrop = styled.div<StyledBackdropProps>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: ${({ show }) => (show ? 0.5 : 0)};
`;

interface BackdropProps {
  show?: boolean;
  clicked: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ show = false, clicked }) => {
  return <>{show && <StyledBackdrop show={show} onClick={clicked} />}</>;
};

export default Backdrop;
