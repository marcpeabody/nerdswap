import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import "./Card.css";

class Card extends Component {
  constructor(props) {
    super(props);
    console.log("drawing card")
    console.log(props);
    this.state = props;
  }
  render() {
    return (
      <div>{this.state.name}</div>
    );
  }
}

export default Card;
