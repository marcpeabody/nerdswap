import React, { Component } from 'react';
import './MTGLink.css';


class MTGLink extends Component {
  displayText() {
    const {card, name, loadCard, quantity, loading} = this.props;
    const quantityText = quantity > 1 ? ` x${quantity}` : '';
    const loadingText = loading ? ' Loading...' : '';
    if (card) {
      return (<div>
                {card.name}{quantityText}
                <img className="cardThumb" src={card.imageUrl} size="40" role="presentation" alt={card.name}/>
              </div>);
    } else {
      return (<div onMouseOver={loadCard}>
                {name}{quantityText}{loadingText}
              </div>);
    }
  }
  render() {
    const {card} = this.props;
    const display = this.displayText();
    if (card) {
      const colorClass = `color${card.colorIdentity}`
      return (
        <div className={colorClass}>
             {display}
        </div>)
    } else {
      return <div className="clickMeLineItem">{display}</div>
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
