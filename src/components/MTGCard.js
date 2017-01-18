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
    return card ? (<img alt={card.name} src={card.imageUrl} role="presentation"/>) : <div>Loading</div>
  }
}

export default MTGCard;
