import React from 'react';

const Square = ({ value }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={() => {
        console.log(value);
      }}
    >
      {value}
    </button>
  );
};

export default Square;
