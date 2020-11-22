import React, { useState } from 'react';
import styled from 'styled-components';
import Blob from './Blob';
import { config, useSpring, animated } from 'react-spring';
import { useVisibility } from '../utils/useVisibility';
import { SectionTitle } from './SectionTitle';
import { faLaptop, faChartArea } from '@fortawesome/free-solid-svg-icons';
import ExperienceItem from './ExperienceItem';

const PageContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer['2xl']};
  position: relative;
  margin-left: ${({ theme }) => theme.spacer[5]};
  margin-right: ${({ theme }) => theme.spacer[5]};
  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin-left: ${({ theme }) => theme.spacer[0]};
    margin-right: ${({ theme }) => theme.spacer[0]};
  }
`;

const BlobContainer = styled.div`
  opacity: 0.15;
  position: absolute;
  top: ${({ theme }) => theme.spacer['xl']};
  left: ${({ theme }) => theme.spacer['xl']};
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    left: ${({ theme }) => theme.spacer['2xl']};
  }
`;

const ExperienceContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacer[10]};
`;

const ExperienceSection: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const props = useSpring({
    transform: visible
      ? 'translate3d(0%, 0px, 0px)'
      : 'translate3d(-50%, 0px, 0px)',
    config: config.gentle,
  });
  const visibilityMarker = useVisibility(visible => {
    setVisible(visible);
  }, []);

  return (
    <PageContainer>
      <SectionTitle colour="yellow">Experience</SectionTitle>
      <BlobContainer>
        <Blob colour="yellow" shape="3" width={320} />
      </BlobContainer>
      <ExperienceContainer ref={visibilityMarker}>
        <animated.div style={props}>
          <ExperienceItem
            dates="2019 - Present"
            jobTitle="Frontend Engineer"
            company="Deloitte Digital"
            icon={faLaptop}
          />
          <ExperienceItem
            dates="2018 - 2019"
            jobTitle="Business Analyst"
            company="Deloitte Digital"
            icon={faChartArea}
          />
        </animated.div>
      </ExperienceContainer>
    </PageContainer>
  );
};
export default ExperienceSection;
