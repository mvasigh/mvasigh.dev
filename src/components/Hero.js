import React from 'react';
import profile from '../content/profile.json';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="Hero">
      <h2 className="Hero__title">👋 Hi there!</h2>
      <h3 className="Hero__subtitle">
        My name is <span className="Hero__name">{profile.name}</span>, and I am
        a <span className="Hero__job-title">{profile.title}</span> currently{' '}
        <span className="Hero__description">{profile.description}</span> for{' '}
        <span className="Hero__company">{profile.company}</span>
      </h3>
      <p>github | linkedin | twitter</p>
    </section>
  );
};

export default Hero;
