import React from 'react';

const BrandedAnchor = ({ children, href }) => (
  <a
    className="branded-anchor"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

export default BrandedAnchor;
