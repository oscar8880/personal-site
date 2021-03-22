import React from 'react';
import styled from 'styled-components';
import Blob from './Blob';
import { SectionTitle } from './SectionTitle';
import {
  faLaptop,
  faChartArea,
  faComments,
} from '@fortawesome/free-solid-svg-icons';
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
  right: ${({ theme }) => theme.spacer[0]};
  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    right: 25%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    right: 50%;
  }
`;

const ExperienceContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacer[10]};
`;

const ExperienceSection: React.FC = () => {
  return (
    <PageContainer>
      <SectionTitle colour="yellow">Experience</SectionTitle>
      <BlobContainer>
        <Blob colour="yellow" shape="3" width={320} />
      </BlobContainer>
      <ExperienceContainer>
        <ExperienceItem
          dates="2021 - Present"
          jobTitle="Frontend Engineer"
          company="Twilio"
          icon={faComments}
        />
        <ExperienceItem
          dates="2019 - 2021"
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
      </ExperienceContainer>
    </PageContainer>
  );
};
export default ExperienceSection;
