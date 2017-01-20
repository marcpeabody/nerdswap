import React, {Component} from 'react';
import MTGDeck from './MTGDeck';
import './MTGBuildableDeck.css';
import mtg from 'mtgsdk';

class SearchResult extends Component {
  constructor(props) {
    super(props);
    this.searchResultSelected = this.searchResultSelected.bind(this);
  }
  searchResultSelected() {
    this.props.onSelect(this.props.card);
  }
  render() {
    const card = this.props.card;
    return (
      <div>
        <img alt={card.name}
             src={card.imageUrl}
             onClick={this.searchResultSelected} />
      </div>
    );
  }
}

class LineItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      results: [],
      selectedCard: null
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.searchCardsByName = this.searchCardsByName.bind(this);
  }
  searchCardsByName(e) {
    const searchName = this.state.name;
    e.preventDefault();
    this.setState({results: []});

    mtg.card.all({name: searchName}).on('data', result => {
      // this actually loops through many results sometimes, so only respond to first
      // not all have an image; use the first result that has an image
      // no more than 10 per search
      if (result.imageUrl && this.state.results.length < 10) {
        this.setState({results: this.state.results.concat([result])});
      }
    })
  }
  handleNameChange(event) {
    this.setState({name: event.target.value});
  }
  selectSearchResult(card) {
    this.setState({selectedCard: card, results: []})
    this.props.addLineItem(card);
  }
  render() {
    const cardsFound = this.state.results.map((card, i) => {
      return (<SearchResult key={i} card={card}
                onSelect={this.selectSearchResult.bind(this)} />);
    });
    const selectedCardName = this.state.selectedCard ? this.state.selectedCard.name : '';
    return (
      <div>
        <form className="addDeckLineItem" onSubmit={this.searchCardsByName}>
          <input onChange={this.handleNameChange} className="name" type="text" name="name" value={this.state.name} placeholder="Card Name" />
          <button>Search</button>
        </form>
        <div className="results">
          {cardsFound}
        </div>
        <div className="selectedCard">
          {selectedCardName}
        </div>
      </div>
    );
  }
}

class MTGBuildableDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items
    }

    this.priceItems = this.priceItems.bind(this);
    this.addLineItems = this.addLineItem.bind(this);
  }
  fetchItemPrice(item) {
    return (Math.random()*15);
  }
  priceItems() {
    const {items} = this.state;
    const updatedPriceItems = items.map(item => {
      const price = this.fetchItemPrice(item);
      item.price = price;
      return item;
    });
    this.setState({items: updatedPriceItems});
  }
  addLineItem(lineItem) {
    const lineItemData = {quantity: 4, name: lineItem.name, id: lineItem.id};
    this.setState({items: this.state.items.concat([lineItemData])});
  }
  render() {
    return (
      <div className="buildable-deck">
        <div className="header">
          Buildable Deck
          <button onClick={this.priceItems}>Price</button>
        </div>
        <MTGDeck items={this.state.items} />
        <LineItemForm addLineItem={this.addLineItem}/>
      </div>
    );
  }
}

export default MTGBuildableDeck;

