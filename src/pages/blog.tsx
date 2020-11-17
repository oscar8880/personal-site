import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { P } from '../components/Typography';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Blog" />
    <P>Blog will be here</P>
  </Layout>
);

export default IndexPage;
