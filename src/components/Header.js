import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import classes from './header.module.css';
import { withRouter } from "react-router-dom";

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const location = this.props.history.location;
    return (
      <Navbar bg="light" expand="md" fixed="top" onSelect="test()" variant="light"className={classes.navShadow}>
        <Navbar.Brand href="/">
          <img
            src="favicon.PNG"
            height="27"
            alt="Hack4Impact Logo"
          />{' '}
          <span className={classes.logoMainText}>hack4impact</span>
          UMD
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={location.pathname} className="ml-auto" >
            <Nav.Link href="/About" >About Us</Nav.Link>
            <Nav.Link href="/Projects" >Projects</Nav.Link>
            <Nav.Link href="/Students" >Students</Nav.Link>
            <Nav.Link href="/Nonprofits" >Nonprofits</Nav.Link>
            <Nav.Link href="/Contact" >Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
  }
export default withRouter(Header);