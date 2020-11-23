import React from 'react';
import styled from 'styled-components';
import { H3 } from './Typography';
import Img, { GatsbyImageProps } from 'gatsby-image';
import 'react-multi-carousel/lib/styles.css';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0px 14px -2px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.colour.white};
  margin-bottom: ${({ theme }) => theme.spacer[12]};
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-bottom: ${({ theme }) => theme.spacer[12]};
  }
  max-width: 350px;
  min-width: 300px;
`;

const InfoContainer = styled.div`
  text-align: left;
  height: 150px;
  padding-top: ${({ theme }) => theme.spacer[5]};
  padding-left: ${({ theme }) => theme.spacer[5]};
  padding-right: ${({ theme }) => theme.spacer[5]};
  padding-bottom: ${({ theme }) => theme.spacer[5]};
`;

const Description = styled.div`
  padding-top: ${({ theme }) => theme.spacer[2]};
  line-height: 1.25;
`;

const StyledImg = styled(Img)<GatsbyImageProps>`
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

interface ProjectCardProps {
  title: string;
  description: string;
  image: {
    aspectRatio: number;
    sizes: string;
    src: string;
    srcSet: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <Container>
      <StyledImg fluid={{ ...image }} title={title} />
      <InfoContainer>
        <H3>{title}</H3>
        <Description>{description}</Description>
      </InfoContainer>
    </Container>
  );
};

export default ProjectCard;
