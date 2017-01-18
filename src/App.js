import React, { Component } from 'react';
import Menu from "./components/menu/Menu.js";
import MTGDeck from './components/decks/MTGDeck';
import MTGBuildableDeck from './components/decks/MTGBuildableDeck';
import MTGCard from './components/MTGCard';
import './App.css';
import WinningDeck from './WinningDeck';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <MTGBuildableDeck items={WinningDeck}/>
        <MTGDeck items={WinningDeck}/>
        <MTGCard id="42"/>
      </div>
    );
  }
}

export default App;
