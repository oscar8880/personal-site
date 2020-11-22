import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Blob from './Blob';
import { SectionTitle } from './SectionTitle';
import ProjectCard from './ProjectCard';
import ProjectCarousel from './ProjectsCarousel';

const PageContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer['xl']};
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
    <PageContainer>
      <SectionTitle colour="pink">Projects</SectionTitle>
      <BlobContainer>
        <Blob colour="pink" shape="2" width={450} />
      </BlobContainer>
      <ProjectsContainer>
        <ProjectCarousel projects={projects} />
      </ProjectsContainer>
    </PageContainer>
  );
};
export default ProjectSection;
