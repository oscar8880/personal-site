import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

import Blob from '../components/Blob';
import { SectionTitle } from '../components/SectionTitle';
import { P } from '../components/Typography';
import { Col, Container, Row } from 'react-grid-system';

const PageContainer = styled.div`
  position: relative;
  min-height: calc(100vh - 297px);
  padding-top: ${({ theme }) => theme.spacer[6]};
  margin-left: ${({ theme }) => theme.spacer[5]};
  margin-right: ${({ theme }) => theme.spacer[5]};
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: row;
    align-items: flex-end;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    min-height: calc(100vh - 377px);
    margin-left: ${({ theme }) => theme.spacer[0]};
    margin-right: ${({ theme }) => theme.spacer[0]};
  }
`;

const BlobContainer = styled.div`
  opacity: 0.15;
  position: absolute;
  top: ${({ theme }) => theme.spacer[0]};
  right: ${({ theme }) => theme.spacer[0]};
`;

const Section = styled.div`
  padding-bottom: ${({ theme }) => theme.spacer[8]};
`;

const TextContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacer[4]};
`;

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Credits" />
    <PageContainer>
      <BlobContainer>
        <Blob colour="green" shape="3" width={350} />
      </BlobContainer>
      <Container fluid>
        <Row>
          <Col lg={6}>
            <Section>
              <SectionTitle colour="green">Icons</SectionTitle>
              <TextContainer>
                <P>
                  All icons are sourced from Font Awesome{' '}
                  <a href="https://fontawesome.com/">here</a>
                </P>
              </TextContainer>
            </Section>
            <Section>
              <SectionTitle colour="green">Images</SectionTitle>
              <TextContainer>
                <P>
                  Laptop vector image from Raw Pixel{' '}
                  <a href="https://www.rawpixel.com/image/382509/free-illustration-vector-computer-laptop-isometric">
                    here
                  </a>
                </P>
              </TextContainer>
            </Section>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  </Layout>
);

export default IndexPage;
