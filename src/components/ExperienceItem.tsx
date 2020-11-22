import React from 'react';
import styled from 'styled-components';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { P } from './Typography';

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: ${({ theme }) => theme.spacer[8]};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 70px;
`;

const ExperienceDetailsContainer = styled.div`
  padding-left: ${({ theme }) => theme.spacer[5]};
`;

const Dates = styled(P)`
  color: ${({ theme }) => theme.colour.grey500};
  padding-bottom: ${({ theme }) => theme.spacer[1]};
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-bottom: ${({ theme }) => theme.spacer[2]};
  }
`;

const JobTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSize['xl']};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding-bottom: ${({ theme }) => theme.spacer[1]};
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    padding-bottom: ${({ theme }) => theme.spacer[2]};
  }
`;

const Company = styled(P)`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

interface ExperienceItemProps {
  jobTitle: string;
  dates: string;
  company: string;
  icon: IconDefinition;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  jobTitle,
  dates,
  company,
  icon,
}) => {
  return (
    <ExperienceContainer>
      <IconContainer>
        <FontAwesomeIcon size="3x" color="#FFD166" icon={icon} />
      </IconContainer>
      <ExperienceDetailsContainer>
        <Dates>{dates}</Dates>
        <JobTitle>{jobTitle}</JobTitle>
        <Company>{company}</Company>
      </ExperienceDetailsContainer>
    </ExperienceContainer>
  );
};

export default ExperienceItem;
