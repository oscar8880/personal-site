import React, { useState } from 'react';
import styled from 'styled-components';
import Blob from './Blob';
import { config, useSpring, animated } from 'react-spring';
import { useVisibility } from '../utils/useVisibility';
import { SectionTitle } from './SectionTitle';
import { Col, Container, Row } from 'react-grid-system';
import Skill from './Skill';

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
  right: ${({ theme }) => theme.spacer['2xl']};
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    right: ${({ theme }) => theme.spacer['2xl']};
  }
`;

const SkillsContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacer[10]};
`;

const SkillsSection: React.FC = () => {
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
      <SectionTitle colour="blue">Skills</SectionTitle>
      <BlobContainer>
        <Blob colour="blue" shape="4" width={408} />
      </BlobContainer>
      <SkillsContainer ref={visibilityMarker}>
        <animated.div style={props}>
          <Container fluid>
            <Row>
              <Col sm={5}>
                <Skill skill="JavaScript" level={9} />
                <Skill skill="React" level={9} />
                <Skill skill="HTML" level={8} />
                <Skill skill="CSS" level={8} />
              </Col>
              <Col sm={5} offset={{ sm: 2 }}>
                <Skill skill="Node.js" level={8} />
                <Skill skill="Typescript" level={8} />
                <Skill skill="Java" level={6} />
                <Skill skill="AWS" level={5} />
              </Col>
            </Row>
          </Container>
        </animated.div>
      </SkillsContainer>
    </PageContainer>
  );
};
export default SkillsSection;
