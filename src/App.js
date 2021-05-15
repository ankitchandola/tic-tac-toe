import React from 'react';
import Board from './components/Board';

import './styles/root.scss';

const App = () => {
  return (
    <div>
      <h1>TicTacToe</h1>
      <Board />
    </div>
  );
};

export default App;
