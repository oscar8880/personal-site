import styled from 'styled-components';
import { H2 } from './Typography';

export const SectionTitle = styled(H2)`
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
    background-color: ${({ theme }) => theme.colour.pink};
    transition: all 0.25s;
  }
`;
