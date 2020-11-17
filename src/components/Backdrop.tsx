import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const StyledBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
`;

interface BackdropProps {
  show?: boolean;
  clicked: () => void;
}

const Backdrop: React.FC<BackdropProps> = ({ show = false, clicked }) => {
  const [props, set] = useSpring(() => ({ opacity: 1 }));
  set({ opacity: show ? 1 : 0 });

  return (
    <>
      {show && (
        <animated.div style={props}>
          <StyledBackdrop onClick={clicked} />
        </animated.div>
      )}
    </>
  );
};

export default Backdrop;
