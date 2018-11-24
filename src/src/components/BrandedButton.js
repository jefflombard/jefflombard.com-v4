import React from 'react';

const BrandedButton = ({ onClick, children }) => (
  <button
    className="branded-button"
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default BrandedButton;
