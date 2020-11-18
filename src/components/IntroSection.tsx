import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Blob from './Blob';
import Img from 'gatsby-image';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Container = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer['xl']};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacer[6]};
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: row;
    align-items: flex-end;
  }
`;

const BlobContainer = styled.div`
  opacity: 0.15;
  position: absolute;
  top: 0;
  left: 0;
`;

const ImageContainer = styled.div`
  width: 80%;
  margin-top: ${({ theme }) => theme.spacer[6]};
  margin-right: auto;
  margin-left: auto;
  max-width: 250px;
  z-index: 5;
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-left: ${({ theme }) => theme.spacer['xl']};
  }
`;

const StraplineContainer = styled.div`
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    padding-right: ${({ theme }) => theme.spacer[5]};
    padding-bottom: ${({ theme }) => theme.spacer[6]};
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.lg}) {
    padding-right: ${({ theme }) => theme.spacer[0]};
  }
`;

const Strapline = styled.p`
  margin-top: ${({ theme }) => theme.spacer[8]};
  padding-left: 15%;
  padding-right: 15%;
  font-size: ${({ theme }) => theme.fontSize.lg};
  text-align: center;
  letter-spacing: 0.28px;
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
    text-align: right;
    padding-left: ${({ theme }) => theme.spacer[6]};
    padding-right: ${({ theme }) => theme.spacer[0]};
  }
`;

const StyledLink = styled.a`
  margin-left: ${({ theme }) => theme.spacer['2']};
  margin-right: ${({ theme }) => theme.spacer['2']};
  text-decoration: none;
  color: inherit;
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    margin-left: ${({ theme }) => theme.spacer['4']};
    margin-right: ${({ theme }) => theme.spacer['0']};
  }
`;

const IconContainer = styled.div`
  padding-top: ${({ theme }) => theme.spacer[8]};
  display: flex;
  justify-content: center;
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    justify-content: flex-end;
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: ${({ theme }) => theme.colour.pink};
    transition: ${({ theme }) => theme.transition.default};
  }
`;

const IntroSection: React.FC = () => {
  const data = useStaticQuery(graphql`
    query {
      image: contentfulAsset(
        id: { eq: "efcef2ee-ccc3-5366-8234-98f2e06519f6" }
      ) {
        fluid(maxWidth: 300) {
          ...GatsbyContentfulFluid_noBase64
        }
        title
      }
    }
  `);

  return (
    <Container>
      <BlobContainer>
        <Blob colour="green" shape="1" width={450} />
      </BlobContainer>
      <ImageContainer>
        <Img fluid={data.image.fluid} alt={data.image.title} />
      </ImageContainer>
      <StraplineContainer>
        <Strapline>
          I’m Oscar Zealley, a professional JavaScript engineer and web
          development enthusiast
        </Strapline>
        <IconContainer>
          <StyledLink href="https://github.com/oscar8880" target="_blank">
            <StyledIcon size="3x" color="#020202" icon={faGithubSquare} />
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/in/oscar-zealley-81a027123/"
            target="_blank"
          >
            <StyledIcon size="3x" color="#020202" icon={faLinkedin} />
          </StyledLink>
        </IconContainer>
      </StraplineContainer>
    </Container>
  );
};
export default IntroSection;
