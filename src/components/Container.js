import React from 'react';

const Container = ({ children, ...props }) => (
  <div className="Container" {...props}>
    {children}
  </div>
);

export default Container;
