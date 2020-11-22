import styled, { DefaultTheme } from 'styled-components';
import { H2 } from './Typography';

interface SectionTitleProps {
  colour: keyof DefaultTheme['colour'];
}

export const SectionTitle = styled(H2)<SectionTitleProps>`
  display: inline-block;
  position: relative;
  text-align: left;
  ::after {
    content: '';
    position: absolute;
    height: 5px;
    bottom: -8px;
    right: 0;
    width: 100%;
    background-color: ${({ colour, theme }) =>
      theme.colour[`${colour}` as keyof DefaultTheme['colour']]};
    transition: all 0.25s;
  }
`;
