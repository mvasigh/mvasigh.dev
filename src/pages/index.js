import React from 'react';

import { Section, Hero } from '../components';
import SEO from '../components/SEO';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Section emoji="🥞" title={`Tech Stack`}>
      Hello world!
    </Section>
    <Section emoji="👨🏻‍💻" title={`Open Source`}>
      Hello world!
    </Section>
    <Section emoji="📝" title={`Blog Posts`}>
      Hello world!
    </Section>
    <Section emoji="🗣" title={`Talks`}>
      Hello world!
    </Section>
  </>
);

export default IndexPage;
