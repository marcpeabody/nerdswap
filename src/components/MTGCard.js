import React, { Component } from 'react';
import mtg from 'mtgsdk';

class MTGCard extends Component {
  constructor(props) {
    super(props);
    this.state = { card: null };

    mtg.card.find(this.props.id || 3).then(result => { // 3 is Black Lotus
      this.setState({ card: result.card });
    })
  }
  render() {
    const {card} = this.state;
    if (card) {
      const legalities = card.legalities.map((leg, i) => <div key={i}>format: {leg.format} - legality: {leg.legality}</div>)
      return (
        <div>
          <ul>
            <li>artist: {card.artist}</li>
            <li>cmc: {card.cmc}</li>
            <li>id: {card.id}</li>
            <li>imageUrl: {card.imageUrl}</li>
            <li>layout: {card.layout}</li>
            <li>legalities: {legalities}</li>
            <li>manaCost: {card.manaCost}</li>
            <li>multiverseid: {card.multiverseid}</li>
            <li>name: {card.name}</li>
            <li>originalText: {card.originalText}</li>
            <li>originalType: {card.originalType}</li>
            <li>printings: {card.printings.join(',')}</li>
            <li>rarity: {card.rarity}</li>
            <li>set: {card.set}</li>
            <li>setName: {card.setName}</li>
            <li>text: {card.text}</li>
            <li>type: {card.type}</li>
            <li>types: {card.types}</li>
          </ul>
          <img alt={card.name} src={card.imageUrl} role="presentation"/>
        </div>
      );
    } else {
      return (<div>Loading</div>);
    }
  }
}

export default MTGCard;
