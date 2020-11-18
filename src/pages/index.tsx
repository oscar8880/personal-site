import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import IntroSection from '../components/IntroSection';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
  </Layout>
);

export default IndexPage;
