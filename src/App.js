import React, { Component } from 'react';
import logo from './logo.svg';
// import MTGCard from './MTGCard';
import MTGLink from './MTGLink';
import './App.css';
import WinningDeck from './WinningDeck';

class App extends Component {
  render() {
    const deck = WinningDeck.map((lineItem, i) => {
      return (<MTGLink key={i} {...lineItem} />);
    })
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to NerdSwap</h2>
        </div>
        {deck}
      </div>
    );
  }
}

export default App;
