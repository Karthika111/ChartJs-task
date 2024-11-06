// src/components/ThemeToggle.js
import React from 'react';

const ThemeToggle = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
