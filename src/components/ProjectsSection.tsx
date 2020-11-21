import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Blob from './Blob';
import { config, useSpring, animated } from 'react-spring';
import { useVisibility } from '../utils/useVisibility';
import { SectionTitle } from './SectionTitle';
import ProjectCard from './ProjectCard';
import ProjectCarousel from './ProjectsCarousel';

const PageContainer = styled.div`
  min-height: 600px;
  margin-bottom: ${({ theme }) => theme.spacer['2xl']};
  position: relative;
  margin-left: ${({ theme }) => theme.spacer[5]};
  margin-right: ${({ theme }) => theme.spacer[5]};
  margin-top: ${({ theme }) => theme.spacer['xl']};
  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin-left: ${({ theme }) => theme.spacer[0]};
    margin-right: ${({ theme }) => theme.spacer[0]};
    margin-top: ${({ theme }) => theme.spacer['2xl']};
  }
`;

const BlobContainer = styled.div`
  opacity: 0.15;
  position: absolute;
  top: ${({ theme }) => theme.spacer['2xl']};
  right: ${({ theme }) => theme.spacer[0]};
`;

const ProjectsContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacer[12]};
  padding-bottom: ${({ theme }) => theme.spacer[12]};
  width: 100%;
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 100%;
  }
`;

interface ComponentData {
  allContentfulProjectHighlight: {
    nodes: [
      {
        description: string;
        image: {
          fluid: {
            aspectRatio: number;
            sizes: string;
            src: string;
            srcSet: string;
          };
        };
        link: string;
        order: number;
        title: string;
      }
    ];
  };
}

const ProjectSection: React.FC = () => {
  const data: ComponentData = useStaticQuery(graphql`
    query {
      allContentfulProjectHighlight {
        nodes {
          description
          link
          order
          title
          image {
            fluid(maxWidth: 500, maxHeight: 500) {
              ...GatsbyContentfulFluid_noBase64
            }
          }
        }
      }
    }
  `);
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

  const projects = data.allContentfulProjectHighlight.nodes
    .sort((a, b) => {
      return a.order < b.order ? -1 : 1;
    })
    .map(project => {
      return (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          image={project.image.fluid}
        />
      );
    });

  return (
    <PageContainer ref={visibilityMarker}>
      <SectionTitle>Project Highlights</SectionTitle>
      <BlobContainer>
        <Blob colour="pink" shape="2" width={450} />
      </BlobContainer>
      <ProjectsContainer>
        <animated.div style={props}>
          <ProjectCarousel projects={projects} />
        </animated.div>
      </ProjectsContainer>
    </PageContainer>
  );
};
export default ProjectSection;
