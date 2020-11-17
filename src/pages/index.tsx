import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { H1, H2, P } from '../components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom } from '@fortawesome/free-solid-svg-icons';

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <P>Paragraph</P>
    <H1>H1</H1>
    <H2>H2</H2>
    <FontAwesomeIcon size="5x" icon={faAtom} />
  </Layout>
);

export default IndexPage;
