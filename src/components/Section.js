import React from 'react';

import './Section.scss';

const Section = ({ emoji = '🎉', title = 'Section Title', children }) => {
  return (
    <section className="Section">
      <span className="Section__emoji">{emoji}</span>
      <h4 className="Section__title">
        <span>{title}</span>
      </h4>
      <div className="Section__content">{children}</div>
    </section>
  );
};

export default Section;
