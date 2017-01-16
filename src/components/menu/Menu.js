import React, { Component } from 'react';
import { Navbar, Nav, NavItem, FormGroup, FormControl, Button } from 'react-bootstrap';
import "./Menu.css";

class Menu extends Component {
  constructor() {
    super();
    this.state = { };
  }
  goTo(item) {
      console.log("clicked: " + item);
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
            <NavItem onClick={() => this.goTo('news')} href="#">News</NavItem>
            <NavItem onClick={() => this.goTo('about')} href="#">About</NavItem>
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
