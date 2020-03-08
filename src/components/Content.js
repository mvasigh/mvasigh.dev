import React from 'react';

import './Content.scss';

const Content = ({ children, ...props }) => {
  return (
    <div className="Content" {...props}>
      {children}
    </div>
  );
};

export default Content;
