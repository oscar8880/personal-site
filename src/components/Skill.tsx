import React, { useState } from 'react';
import { animated, config, useSpring } from 'react-spring';
import styled from 'styled-components';
import { useVisibility } from '../utils/useVisibility';
import { P } from './Typography';

const SkillBarContainer = styled.div`
  progress[value] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    padding-top: ${({ theme }) => theme.spacer[2]};
    ::-webkit-progress-bar {
      height: 10px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colour.grey300};
    }
    ::-webkit-progress-value {
      height: 10px;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.colour.blue};
    }
  }
  padding-bottom: ${({ theme }) => theme.spacer[4]};
`;

interface SkillProps {
  skill: string;
  level: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
}

const Skill: React.FC<SkillProps> = ({ skill, level }) => {
  const [visible, setVisible] = useState(false);
  const props = useSpring({
    number: visible ? level : 0,
    from: { number: 0 },
    config: config.molasses,
  });
  const visibilityMarker = useVisibility(visible => {
    setVisible(visible);
  }, []);

  return (
    <SkillBarContainer>
      <P>{skill}</P>
      <animated.progress value={props.number} max={10} ref={visibilityMarker} />
    </SkillBarContainer>
  );
};

export default Skill;
