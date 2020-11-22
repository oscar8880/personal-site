import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import IntroSection from '../components/IntroSection';
import ProjectSection from '../components/ProjectsSection';
import ExperienceSection from '../components/ExperienceSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <IntroSection />
    <ProjectSection />
    <ExperienceSection />
    <SkillsSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;
