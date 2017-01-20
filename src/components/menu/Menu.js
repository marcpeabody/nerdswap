import React, { Component } from 'react';
import { Link } from 'react-router'
import { browserHistory } from 'react-router'
import { Navbar, FormGroup, FormControl, Button } from 'react-bootstrap';
import "./Menu.css";

class Menu extends Component {
  constructor() {
    super();
    this.state = { };
  }
  search(event) {
      let value = event.target.value;
    if(event.key == "Enter" && value){
        // this.context.router.push("#/search/" + event.target.value)
        debugger;
        browserHistory.push("/search/" + value);
    }
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
                <FormControl type="text" placeholder="Search" bsClass="form-control search" onKeyPress={this.search}/>
            </FormGroup>
            <Button>Log In</Button>
        </Navbar.Form>
    </Navbar>)
  }
}

export default Menu;
