import React, { Component } from 'react';
import basketball from './Basketball.svg';
import './App.css';
import MainPage from './MainPage/MainPage.container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={basketball} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Basket App</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MainPage />
      </div>
    );
  }
}

export default App;
