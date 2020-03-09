import React from 'react';
import { Section, Hero, Content, Footer } from '../components';
import SEO from '../components/Head';
import profile from '../content/profile.json';
import '../styles/base.scss';

const talks = [
  {
    title: 'Unlocking the Hidden Powers of JavaScript',
    event: 'GDG DevFest Houston 2019',
    date: new Date('Sep 28, 2019'),
  },
  {
    title: 'Fluid and Responsive UIs with Advanced JavaScript Native APIs',
    event: 'Houston.js',
    date: new Date('Nov 6, 2019'),
  },
  {
    title: '60fps React Apps with Web Workers',
    event: 'Houston React Developers',
    date: new Date('Oct 24, 2019'),
  },
  {
    title: 'Styling Strategies in React Projects',
    event: 'Houston React Developers',
    date: new Date('Mar 21, 2019'),
  },
  {
    title: 'Buttery Smooth Web UI with Off-Main-Thread Architecture',
    event: 'UIArchConf',
    date: new Date('Apr 1, 2020'),
  },
];

const sortedTalks = [...talks].sort((a, b) => {
  if (a.date > b.date) {
    return -1;
  } else if (a.date < b.date) {
    return 1;
  } else {
    return 0;
  }
});

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
          <strong>React</strong>, <strong>Node.js</strong>,{' '}
          <strong>TypeScript</strong> and <strong>GraphQL</strong>. I also enjoy
          doodling with <strong>CSS</strong> and <strong>SVG</strong> and
          experimenting with <strong>Rust</strong> and{' '}
          <strong>WebAssembly</strong>.
        </p>
        <p>
          I've also built software using a variety of other technologies in my
          career, such as <ProficientTech />.
        </p>
      </Content>
    </Section>
    <Section emoji="🗣" title={`Talks`}>
      <Content>
        <ul>
          {sortedTalks.map(({ title, date, event }) => {
            const dtf = new Intl.DateTimeFormat('en', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            const [
              { value: mo },
              ,
              { value: da },
              ,
              { value: ye },
            ] = dtf.formatToParts(date);
            return (
              <li key={title}>
                <em>{`"${title}"`}</em>
                <br />
                <strong>{event}</strong> - {`${mo} ${da}, ${ye}`}
              </li>
            );
          })}
        </ul>
      </Content>
    </Section>
    <Footer>
      <Content>
        <p style={{ textAlign: 'center' }}>
          With{' '}
          <span role="img" aria-label="love">
            ❤️
          </span>{' '}
          by <a href="mailto:mehdi.vasigh@gmail.com">Mehdi Vasigh</a>,{' '}
          {new Date().getFullYear()}
        </p>
      </Content>
    </Footer>
    {/* TODO */}
    {/* <Section emoji="👨🏻‍💻" title={`Open Source`}>
      <Content>
        <p>
          I am passionate about <strong>open source software</strong> and love
          to contribute! Here are some projects I have contributed to:
        </p>
      </Content>
    </Section>
    <Section emoji="📝" title={`Blog Posts`}>
      Hello world!
    </Section> */}
  </>
);

export default IndexPage;
