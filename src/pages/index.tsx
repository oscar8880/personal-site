import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { H1, H2, H3, P } from '../components/Typography';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <P>Paragraph</P>
    <H1>H1</H1>
    <H2>H2</H2>
    <H3>H3</H3>
  </Layout>
);

export default IndexPage;
