import React, { Component } from 'react';
import './MTGLink.css';


class MTGLink extends Component {
  formatPrice(price) {
    return (price) ? `$${price.toFixed(2)}` : '';
  }
  displayText() {
    const {card, name, loadCard, quantity, loading, price} = this.props;
    const quantityText = ` x${quantity}`;
    const loadingText = loading ? ' Loading...' : '';
    const totalPrice = (price && quantity) ? (this.formatPrice(price*quantity)) : '';
    const totalText = totalPrice ? ` = ${totalPrice}` : '';
    if (card) {
      return (<div>
                {card.name} {this.formatPrice(price)}{quantityText}{totalText}
                <img className="cardThumb" src={card.imageUrl} size="40" role="presentation" alt={card.name}/>
              </div>);
    } else {
      return (<div onMouseOver={loadCard}>
                {name} {this.formatPrice(price)}{quantityText}{totalText}{loadingText}
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
