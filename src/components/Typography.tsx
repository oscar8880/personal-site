import styled from 'styled-components';

export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export const H1 = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize['4xl']};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  @media (min-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
  }
`;

export const H3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
