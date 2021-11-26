import React from 'react';
import {
  FiTwitter,
  FiGithub,
  FiLinkedin,
  FiTwitch,
  FiYoutube,
} from 'react-icons/fi';
import profile from '../content/profile.json';
import './Hero.scss';

const siteIcons = {
  twitter: FiTwitter,
  github: FiGithub,
  linkedin: FiLinkedin,
  twitch: FiTwitch,
  youtube: FiYoutube,
};

const Hero = () => {
  return (
    <section className="Hero">
      <h2 className="Hero__title">
        <span className="Hero__wave" role="img" aria-label="Wave">
          👋
        </span>{' '}
        <span className="Hero__title--text">Hi there!</span>
      </h2>
      <p className="Hero__subtitle">
        My name is <span className="Hero__name">{profile.name}</span>, and I am
        a <span className="Hero__job-title">software engineer</span> and{' '}
        <span className="Hero__job-title">digital artist</span>
      </p>
      {/* <p className="Hero__subtitle">
        My name is <span className="Hero__name">{profile.name}</span>, and I am
        a <span className="Hero__job-title">{profile.title}</span> currently{' '}
        <span className="Hero__description">{profile.description}</span> for{' '}
        <span className="Hero__company">{profile.company}</span>
      </p> */}
      <ul className="Hero__links">
        {Object.entries(profile.links).map(([site, url]) => {
          const Icon = siteIcons[site];
          return (
            <li className="Hero__link" key={site}>
              <a href={url} title={site}>
                <Icon className="Hero__link-icon" />
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Hero;
