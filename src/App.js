import React from 'react';
import logo from './logo.svg';
import './App.css';

import TerminalContainer from './components/Terminal';

function App() {
  return (
    <div className="App">
      <TerminalContainer></TerminalContainer>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
