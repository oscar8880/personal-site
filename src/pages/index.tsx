import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import IntroSection from '../components/IntroSection';
import ProjectSection from '../components/ProjectsSection';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <ProjectSection />
  </Layout>
);

export default IndexPage;
