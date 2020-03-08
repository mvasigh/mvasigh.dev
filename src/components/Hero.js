import React from 'react';
import profile from '../content/profile.json';
import './Hero.scss';

const Hero = () => {
  return (
    <section className="Hero">
      <h2 className="Hero__title">
        <span className="Hero__wave">👋</span>{' '}
        <span className="Hero__title--text">Hi there!</span>
      </h2>
      <h3 className="Hero__subtitle">
        My name is <span className="Hero__name">{profile.name}</span>, and I am
        a <span className="Hero__job-title">{profile.title}</span> currently{' '}
        <span className="Hero__description">{profile.description}</span> for{' '}
        <span className="Hero__company">{profile.company}</span>
      </h3>
      <p className="Hero__links">github | linkedin | twitter</p>
    </section>
  );
};

export default Hero;
