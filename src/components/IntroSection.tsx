import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import styled from 'styled-components';
import Blob from './Blob';
import Img from 'gatsby-image';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { animated, config, useSpring } from 'react-spring';
import { useVisibility } from '../utils/useVisibility';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacer[6]};
  padding-bottom: ${({ theme }) => theme.spacer[12]};
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    flex-direction: row;
    align-items: flex-end;
    padding-bottom: ${({ theme }) => theme.spacer['xl']};
  }
`;

const BlobContainer = styled.div`
  opacity: 0.15;
  position: absolute;
  top: 0;
  right: ${({ theme }) => theme.spacer[0]};
  @media (min-width: ${({ theme }) => theme.breakpoint.sm}) {
    right: 25%;
  }
  @media (min-width: ${({ theme }) => theme.breakpoint.md}) {
    right: 50%;
  }
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
      image: contentfulAsset(contentful_id: { eq: "41kQVrYKodYUd7l7DrxrhP" }) {
        fluid(maxWidth: 300) {
          ...GatsbyContentfulFluid_noBase64
        }
        title
      }
    }
  `);
  const [visible, setVisible] = useState(false);
  const props = useSpring({
    transform: visible
      ? 'translate3d(0%, 0px, 0px)'
      : 'translate3d(0%, 50%, 0px)',
    opacity: visible ? 1 : 0,
    config: config.gentle,
  });
  const visibilityMarker = useVisibility(visible => {
    setVisible(visible);
  }, []);

  return (
    <Container ref={visibilityMarker}>
      <BlobContainer>
        <Blob colour="green" shape="1" width={450} />
      </BlobContainer>
      <ImageContainer>
        <Img fluid={data.image.fluid} alt={data.image.title} />
      </ImageContainer>
      <StraplineContainer>
        <animated.div style={props}>
          <Strapline>
            I’m Oscar Zealley, a professional JavaScript engineer and web
            development enthusiast
          </Strapline>
          <IconContainer>
            <StyledLink
              title="Github Link"
              rel="noopener noreferrer"
              href="https://github.com/oscar8880"
              target="_blank"
            >
              <StyledIcon
                title="Github Link"
                size="3x"
                color="#020202"
                icon={faGithubSquare}
              />
            </StyledLink>
            <StyledLink
              title="LinkedIn Link"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/oscar-zealley-81a027123/"
              target="_blank"
            >
              <StyledIcon
                title="Github Link"
                size="3x"
                color="#020202"
                icon={faLinkedin}
              />
            </StyledLink>
          </IconContainer>
        </animated.div>
      </StraplineContainer>
    </Container>
  );
};
export default IntroSection;
