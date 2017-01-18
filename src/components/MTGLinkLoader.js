import React, { Component } from 'react';
import mtg from 'mtgsdk';
import MTGLink from './MTGLink';

class MTGLinkLoader extends Component {
  constructor(props) {
    super();
    this.state = {
      card: null,
      loading: false
    };
  }
  loadCard() {
    const {id, name} = this.props;

    this.setState({loading: true});
    if (id) {
      mtg.card.find(this.props.id).then(result => { // 3 is Black Lotus
        this.setLoadedCard(result.card);
      })
    } else {
      mtg.card.all({name: name}).on('data', result => {
        // this actually loops through many results sometimes, so only respond to first
        // not all have an image; use the first result that has an image
        if (!this.state.card && result.imageUrl) {
          this.setLoadedCard(result);
        }
      })
    }
  }
  setLoadedCard(card) {
    this.setState({ card: card, loading: false });
  }
  render() {
    return (<MTGLink
              {...this.state}
              {...this.props}
              loadCard={this.loadCard.bind(this)} />);
  }
}

export default MTGLinkLoader;
