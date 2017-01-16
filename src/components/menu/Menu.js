import React, { Component } from 'react';
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';
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
        <Nav>
            <NavItem>
                <Link to="/news">News</Link>
            </NavItem>
            <NavItem>
                <Link to="/about">About</Link>
            </NavItem>
        </Nav>
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
