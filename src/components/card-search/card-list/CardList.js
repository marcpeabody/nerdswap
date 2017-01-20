import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Card from "../card/Card"
import "./CardList.css";

class CardList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Row className="CardList">
        <Col md={12}>
            {
              this.props.cards.map(function(card) {
                  return <Card key={card.id} {...card}></Card>
              })
            }
        </Col>
      </Row>
    );
  }
}

export default CardList;
