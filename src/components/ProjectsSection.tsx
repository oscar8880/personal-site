import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Blob from './Blob';
import Img from 'gatsby-image';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, config, useSpring } from 'react-spring';
import { useVisibility } from '../utils/useVisibility';
import { H2 } from './Typography';
import { SectionTitle } from './SectionTitle';
import ProjectCard from './ProjectCard';
import { Container, Col, Row } from 'react-grid-system';

const PageContainer = styled.div`
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
  top: ${({ theme }) => theme.spacer['xl']};
  right: ${({ theme }) => theme.spacer[0]};
`;

const ProjectsContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacer['xl']};
  width: 100%;
  margin: 0 auto;
  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    margin: 0;
  }
`;

const ProjectSection: React.FC = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     image: contentfulAsset(contentful_id: { eq: "5MCcvGvraXndHAgsUxaAHx" }) {
  //       fluid(maxWidth: 500, maxHeight: 500) {
  //         ...GatsbyContentfulFluid_noBase64
  //       }
  //       title
  //     }
  //   }
  // `);

  const data = useStaticQuery(graphql`
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
      : 'translate3d(50%, 0px, 0px)',
    config: config.gentle,
  });
  const visibilityMarker = useVisibility(visible => {
    setVisible(visible);
  }, []);

  console.log(data);

  return (
    <PageContainer ref={visibilityMarker}>
      <SectionTitle>Project Highlights</SectionTitle>
      <BlobContainer>
        <Blob colour="pink" shape="2" width={450} />
      </BlobContainer>
      <ProjectsContainer>
        <Container fluid>
          <Row justify="center">
            {data.allContentfulProjectHighlight.nodes.map(proj => {
              return (
                <Col key={proj.title} sm={6} lg={4}>
                  <ProjectCard
                    title={proj.title}
                    description={proj.description}
                    image={proj.image.fluid}
                  />
                </Col>
              );
            })}
          </Row>
        </Container>
      </ProjectsContainer>
    </PageContainer>
  );
};
export default ProjectSection;
