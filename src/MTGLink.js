import React, { Component } from 'react';
import mtg from 'mtgsdk';
import './MTGLink.css';

class MTGLink extends Component {
  constructor(props) {
    super();
    this.state = {
      card: null,
      loading: false
    };
  }
  loadCard() {
    this.setState({loading: true});
    if (this.props.id) {
      mtg.card.find(this.props.id).then(result => { // 3 is Black Lotus
        this.setState({ card: result.card });
      })
    } else {
      mtg.card.all({name: this.props.name}).on('data', result => {
        // this actually loops through many results sometimes, so only respond to first
        // not all have an image; use the first result that has an image
        if (!this.state.card && result.imageUrl) {
          this.setState({ card: result, loading: false });
        }
      })
    }
  }
  displayText() {
    const quantityText = this.props.quantity > 1 ? ` x${this.props.quantity}` : '';
    const loadingText = this.state.loading ? ' Loading...' : '';
    if (this.state.card) {
      const card = this.state.card;
      return (<div>
                {card.name}{quantityText}
                <img className="cardThumb" src={card.imageUrl} size="40" alt={card.name} />
              </div>);
    } else {
      return (<div
                onMouseOver={this.loadCard.bind(this)}>
                {this.props.name}{quantityText}{loadingText}
              </div>);
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
