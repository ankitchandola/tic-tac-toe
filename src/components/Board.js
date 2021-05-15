import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [board, setBoard] = Array(9).fill(null);
  return (
    <div className="board">
      <div className="board-row">
        <Square value={board[0]} />
        <Square value={board[1]} />
        <Square value={board[2]} />
      </div>
      <div className="board-row">
        <Square value={board[3]} />
        <Square value={board[4]} />
        <Square value={board[5]} />
      </div>
      <div className="board-row">
        <Square value={board[6]} />
        <Square value={board[7]} />
        <Square value={board[8]} />
      </div>
    </div>
  );
};

export default Board;
