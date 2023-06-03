// Dropdown.js
import React from 'react';

const Dropdown = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="dropdown">
      {children}
    </div>
  );
};

export default Dropdown;
