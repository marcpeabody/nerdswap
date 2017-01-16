import React, { Component } from 'react';
import mtg from 'mtgsdk';
import './MTGLink.css';

window.mtg = mtg
class MTGLink extends Component {
  constructor(props) {
    super();
    this.state = { image: null };
    mtg.card.all({name: props.name}).on('data', result => {
      // this actually loops through many results sometimes, so only respond to first
      // not all have an image; use the first result that has an image
      if (!this.state.card && result.imageUrl) {
        this.setState({ card: result });
      }
    })
  }
  displayText() {
    const quantityText = this.props.quantity > 1 ? ` x${this.props.quantity}` : '';
    if (this.state.card) {
      const card = this.state.card;
      return (<div>
                {card.name}{quantityText}
                <img className="cardThumb" src={card.imageUrl} size="40" />
              </div>);
    } else {
      return `Loading "${this.props.name}${quantityText}"`;
    }
  }
  render() {
    const card = this.state.card;
    const display = this.displayText();
    if (card) {
      const colorClass = `color${card.colorIdentity}`
      return (
        <div className={colorClass}>
             {display}
        </div>)
    } else {
      return <div>{display}</div>
    }
  }
}

MTGLink.defaultProps = {
  name: "Black Lotus",
  quantity: "1"
}
MTGLink.contextTypes = {
  name: React.PropTypes.string,
  quantity: React.PropTypes.number
};


export default MTGLink;

