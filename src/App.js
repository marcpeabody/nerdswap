import React, { Component } from 'react';
import MTGDeck from './MTGDeck';
import './App.css';
import WinningDeck from './WinningDeck';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MTGDeck items={WinningDeck}/>
      </div>
    );
  }
}

export default App;
