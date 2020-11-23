import { Link } from 'gatsby';
import styled from 'styled-components';

interface NavLinkProps {
  size: 'desktop' | 'mobile';
}

const NavLink = styled(Link)<NavLinkProps>`
  font-size: ${({ theme, size }) =>
    size === 'desktop' ? theme.fontSize['3xl'] : theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  margin-bottom: ${({ theme, size }) =>
    size === 'desktop' ? 'none' : theme.spacer[10]};
  color: ${({ theme }) => theme.colour.primaryFont};
  margin-left: ${({ theme, size }) =>
    size === 'desktop' ? theme.spacer[7] : theme.spacer[0]};
  position: relative;
  ::after {
    content: '';
    position: absolute;
    height: 5px;
    bottom: -8px;
    right: 50%;
    width: 0;
    background-color: ${({ theme }) => theme.colour.pink};
    transition: all 0.25s;
  }
  &.active,
  :hover {
    ::after {
      right: 0;
      width: 100%;
      background-color: ${({ theme }) => theme.colour.pink};
      transition: all 0.25s;
    }
  }
`;

export default NavLink;
