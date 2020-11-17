import React from 'react';
import styled from 'styled-components';

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

interface BackdropProps {
  show?: boolean;
  clicked: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ show = false, clicked }) => {
  return <>{show && <StyledBackdrop onClick={clicked} />}</>;
};

export default Backdrop;
