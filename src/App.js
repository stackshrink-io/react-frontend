import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainCard from './containers/MainCard';

function App() {
  return (
    <div>
      <MainCard/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
