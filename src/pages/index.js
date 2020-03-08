import React from 'react';

import { Section, Hero, Content } from '../components';
import SEO from '../components/SEO';
import profile from '../content/profile.json';

const ProficientTech = () => (
  <>
    {profile.tech.proficient.map((tech, i, arr) => (
      <React.Fragment key={tech}>
        {i === arr.length - 1 ? ' and ' : ''}
        <strong>{tech}</strong>
        {i !== arr.length - 1 ? ', ' : ''}
      </React.Fragment>
    ))}
  </>
);

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
    <Section emoji="🥞" title={`Tech Stack`}>
      <Content>
        <p>
          Currently, I spend most of my energy building apps with{' '}
          <strong>React</strong>, <strong>TypeScript</strong> and{' '}
          <strong>GraphQL</strong>. I also enjoy doodling with{' '}
          <strong>CSS</strong> and <strong>SVG</strong> and experimenting with{' '}
          <strong>Rust</strong> and <strong>WebAssembly</strong>.
        </p>
        <p>
          I've also built software using a variety of other technologies in my
          career, such as <ProficientTech />.
        </p>
      </Content>
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
