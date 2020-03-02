import React from 'react';
import logo from './logo.svg';
import './App.css';

import Terminal from './containers/Terminal';
import ChessBoard from './containers/ChessBoard';

function App() {
  return (
    <div className="App">
      <Terminal></Terminal>
      <ChessBoard></ChessBoard>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
