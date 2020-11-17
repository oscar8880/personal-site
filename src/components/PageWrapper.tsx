import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
`;

const PageWrapper: React.FC = ({ children }) => <Wrapper>{children}</Wrapper>;

export default PageWrapper;
