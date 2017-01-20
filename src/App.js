import React, { Component } from 'react';
import Menu from "./components/menu/Menu.js";
import MTGDeck from './components/decks/MTGDeck';
import MTGBuildableDeck from './components/decks/MTGBuildableDeck';
import MTGCard from './components/MTGCard';
import './App.css';
import WinningDeck from './decks/WinningDeck';
import AshDeck from './decks/AshDeck';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <MTGBuildableDeck items={AshDeck}/>
        <MTGDeck items={WinningDeck}/>
        <MTGCard id="42"/>
      </div>
    );
  }
}

export default App;
