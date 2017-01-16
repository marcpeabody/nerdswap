import React, { Component } from 'react';
import mtg from 'mtgsdk';

class MTGCard extends Component {
  constructor() {
    super();
    this.state = { image: null };

    mtg.card.find(3).then(result => { // 3 is Black Lotus
      this.setState({ image: result.card.imageUrl });
    })
  }
  render() {
    return this.state.image ? (<img src={this.state.image} role="presentation"/>) : <div>Loading</div>
  }
}

export default MTGCard;
