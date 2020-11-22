import React from 'react';
import styled from 'styled-components';
import Blob from './Blob';
import { SectionTitle } from './SectionTitle';
import { Col, Container, Row } from 'react-grid-system';
import Skill from './Skill';

const PageContainer = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer['xl']};
  position: relative;
  margin-left: ${({ theme }) => theme.spacer[5]};
  margin-right: ${({ theme }) => theme.spacer[5]};
  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    margin-bottom: ${({ theme }) => theme.spacer['3xl']};
  }
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
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    right: ${({ theme }) => theme.spacer['2xl']};
  }
`;

const SkillsContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacer[10]};
`;

const SkillsSection: React.FC = () => {
  return (
    <PageContainer>
      <SectionTitle colour="blue">Skills</SectionTitle>
      <BlobContainer>
        <Blob colour="blue" shape="4" width={408} />
      </BlobContainer>
      <SkillsContainer>
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
      </SkillsContainer>
    </PageContainer>
  );
};
export default SkillsSection;
