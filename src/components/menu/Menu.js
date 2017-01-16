import React, { Component } from 'react';
import { Link } from 'react-router'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import "./Menu.css";

class Menu extends Component {
  constructor() {
    super();
    this.state = { };
  }
  render() {
    return(
    <Navbar>
        <Navbar.Header>
        <Navbar.Brand>
            <a href="#">NerdSwap</a>
        </Navbar.Brand>
        </Navbar.Header>
        <ul className="nav navbar-nav">
            <li><Link to="/news">News</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
        <Navbar.Form pullRight>
            <FormGroup>
                <FormControl type="text" placeholder="Search" bsClass="form-control search"/>
            </FormGroup>
            <Button>Log In</Button>
        </Navbar.Form>
    </Navbar>)
  }
}

export default Menu;
