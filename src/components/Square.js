import React from 'react';

import './Square.style.css';

const Square = ({ value }) => {
  return (
    <button type="button" className="btn">
      {value}
    </button>
  );
};

export default Square;
