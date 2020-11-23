import React from 'react';
import Carousel from 'react-multi-carousel';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-multi-carousel/lib/styles.css';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

interface StyledArrowProps {
  direction: 'left' | 'right';
}

const StyledArrow = styled.button<StyledArrowProps>`
  height: 40px;
  width: 40px;
  padding-right: ${({ direction }) => (direction === 'left' ? '10px' : '0')};
  border-radius: 50%;
  position: absolute;
  border: none;
  left: ${({ direction }) => (direction === 'left' ? 0 : 'initial')};
  right: ${({ direction }) => (direction === 'left' ? 'initial' : 0)};
  background-color: ${({ theme }) => theme.colour.pink};
`;

interface CarouselArrowProps extends React.HTMLAttributes<HTMLButtonElement> {
  direction: 'left' | 'right';
}

const CarouselArrow: React.FC<CarouselArrowProps> = ({
  onClick,
  children,
  direction,
}) => {
  return (
    <StyledArrow direction={direction} onClick={e => onClick && onClick(e)}>
      {children}
    </StyledArrow>
  );
};

interface DotProps extends React.HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

interface StyledDotProps {
  active: boolean | undefined;
}

const StyledDot = styled.button<StyledDotProps>`
  background-color: ${({ active, theme }) =>
    active ? theme.colour.pink : theme.colour.grey300};
  border-radius: 50%;
  height: 20px;
  width: 20px;
  margin-left: ${({ theme }) => theme.spacer[2]};
  margin-right: ${({ theme }) => theme.spacer[2]};
  margin-top: ${({ theme }) => theme.spacer[5]};
  border: none;
  transition: ${({ theme }) => theme.transition.default};
  &:hover {
    background-color: ${({ theme }) => theme.colour.pink};
  }
`;

const CustomDot: React.FC<DotProps> = ({ onClick, children, ...props }) => {
  return (
    <StyledDot active={props.active} onClick={e => onClick && onClick(e)}>
      {children}
    </StyledDot>
  );
};

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

const StyledCarousel = styled(Carousel).attrs({
  className: 'carouselContainer',
})`
  &.carouselContainer {
    @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
      padding-left: 50px;
    }
  }
`;

interface ProjectCarouselProps {
  projects: JSX.Element[];
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ projects }) => {
  return (
    <StyledCarousel
      showDots
      swipeable
      minimumTouchDrag={30}
      responsive={responsive}
      removeArrowOnDeviceType={['mobile', 'tablet']}
      containerClass="carouselContainer"
      customDot={<CustomDot />}
      customLeftArrow={
        <CarouselArrow direction="left">
          <FontAwesomeIcon size="2x" color="white" icon={faChevronLeft} />
        </CarouselArrow>
      }
      customRightArrow={
        <CarouselArrow direction="right">
          <FontAwesomeIcon size="2x" color="white" icon={faChevronRight} />
        </CarouselArrow>
      }
    >
      {projects}
    </StyledCarousel>
  );
};

export default ProjectCarousel;
