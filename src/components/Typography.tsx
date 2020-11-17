import styled from 'styled-components';

export const P = styled.p`
  font-size: ${({ theme }) => theme.fontSize.base};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize.lg};
  }
`;

export const H1 = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSize['4xl']};
`;

export const H2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.base};
  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.fontSize['2xl']};
  }
`;
