import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Menu from "../menu/Menu.js";
import CardList from "./card-list/CardList";
import mtg from 'mtgsdk';
import "./CardSearch.css";

class CardSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      cards: [],
      cardNames: []
    };

    mtg.card.all({ name: props.params.cardName }).on("data", result => {
      if(this.state.cardNames.indexOf(result.name) == -1){
        let cards = this.state.cards.concat(result).sort( (a, b) => (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0)
        this.setState({ 
          cards: cards, 
          cardNames: this.state.cardNames.concat(result.name)
        });
      }
    })
  }
  render() {
    return (
      <div className="CardSearch">
        <Menu />
        <Grid>
            <Row>
                <Col md={12}>
                    {this.state.cards.length} Search Results for: {this.props.params.cardName}
                </Col>
            </Row>
            <CardList cards={this.state.cards} />
        </Grid>
      </div>
    );
  }
}

export default CardSearch;
