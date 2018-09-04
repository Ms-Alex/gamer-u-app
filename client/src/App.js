import React, { Component } from 'react';
import steamButton from './steam_butt.png';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to GamerU</h1>
        </header>
        <p className="App-intro">
          To get started, please login through your Steam account.
        </p>

        <a href="/auth/steam">
            <img src={steamButton} alt="Steam Button" />
        </a>

      </div>
    );
  }
}

export default App;
