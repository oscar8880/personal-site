import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import IntroSection from '../components/IntroSection';
import ProjectSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <ProjectSection />
    <ExperienceSection />
    <SkillsSection />
  </Layout>
);

export default IndexPage;
