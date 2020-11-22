import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from './SectionTitle';
import { Col, Container, Row } from 'react-grid-system';

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

const StyledForm = styled.form`
  padding-top: ${({ theme }) => theme.spacer[12]};
  text-align: left;
`;

const StyledLabel = styled.label`
  width: 100%;
  display: block;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.colour.green};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: ${({ theme }) => theme.spacer[2]};
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: ${({ theme }) => theme.fontSize.lg};
    margin-bottom: ${({ theme }) => theme.spacer[4]};
  }
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  height: 45px;
  background-color: ${({ theme }) => theme.colour.grey100};
  border-radius: 4px;
  font-family: inherit;
  color: ${({ theme }) => theme.colour.grey600};
  padding-left: ${({ theme }) => theme.spacer[4]};
  margin-bottom: ${({ theme }) => theme.spacer[4]};
  font-size: inherit;
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-bottom: ${({ theme }) => theme.spacer[8]};
  }
`;

const StyledTextArea = styled.textarea`
  border: none;
  width: 100%;
  height: 90px;
  background-color: ${({ theme }) => theme.colour.grey100};
  border-radius: 4px;
  font-family: inherit;
  color: ${({ theme }) => theme.colour.grey600};
  padding-left: ${({ theme }) => theme.spacer[4]};
  padding-top: ${({ theme }) => theme.spacer[2]};
  padding-right: ${({ theme }) => theme.spacer[4]};
  padding-bottom: ${({ theme }) => theme.spacer[2]};
  margin-bottom: ${({ theme }) => theme.spacer[4]};
  font-size: inherit;
  resize: none;
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-bottom: ${({ theme }) => theme.spacer[8]};
  }
`;

const StyledButton = styled.button`
  width: 100%;
  height: 45px;
  font-size: inherit;
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.colour.white};
  background-color: ${({ theme }) => theme.colour.green};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

const ContactSection: React.FC = () => {
  return (
    <PageContainer>
      <SectionTitle colour="green">Contact</SectionTitle>
      <StyledForm
        method="POST"
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="bot-field" />
        <Container fluid>
          <Row>
            <Col sm={5}>
              <StyledLabel htmlFor="name">Name</StyledLabel>
              <StyledInput type="text" name="name" id="name"></StyledInput>
            </Col>
            <Col sm={5} offset={{ sm: 2 }}>
              <StyledLabel htmlFor="email">Email</StyledLabel>
              <StyledInput type="email" name="email" id="email"></StyledInput>
            </Col>
            <Col xs={12}>
              <StyledLabel htmlFor="message">Message</StyledLabel>
              <StyledTextArea id="message"></StyledTextArea>
            </Col>
            <Col sm={5}>
              <StyledButton type="submit">Submit</StyledButton>
            </Col>
          </Row>
        </Container>
      </StyledForm>
    </PageContainer>
  );
};
export default ContactSection;
