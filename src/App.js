import React, { Component } from 'react';
import MTGDeck from './MTGDeck';
import Menu from "./components/menu/Menu.js";
import MTGCard from './MTGCard';
import './App.css';
import WinningDeck from './WinningDeck';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <MTGDeck items={WinningDeck}/>
        <MTGCard id="42"/>
      </div>
    );
  }
}

export default App;
