import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { P } from './Typography';

const StyledFooter = styled.footer`
  padding-bottom: ${({ theme }) => theme.spacer['xl']};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledIcon = styled(FontAwesomeIcon)`
  &:hover {
    color: ${({ theme }) => theme.colour.pink};
    transition: ${({ theme }) => theme.transition.default};
  }
`;

const StyledLink = styled.a`
  margin-left: ${({ theme }) => theme.spacer['2']};
  margin-right: ${({ theme }) => theme.spacer['2']};
  text-decoration: none;
  color: inherit;
`;

const IconContainer = styled.div`
  padding-bottom: ${({ theme }) => theme.spacer[8]};
  display: flex;
  justify-content: center;
`;

const Footer: React.FC = () => {
  return (
    <StyledFooter>
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
          href="https://www.linkedin.com/in/oscar-zealley-81a027123/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <StyledIcon
            title="LinkedIn Link"
            size="3x"
            color="#020202"
            icon={faLinkedin}
          />
        </StyledLink>
      </IconContainer>
      <P>
        © {new Date().getFullYear()} Oscar Zealley, Built with{' '}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </P>
    </StyledFooter>
  );
};

export default Footer;
