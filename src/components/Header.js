import React from 'react';
import {Nav, Navbar} from "react-bootstrap";
import classes from './header.module.css';
import { withRouter} from "react-router-dom";

class Header extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const location = this.props.history.location;
    
    return (
      <Navbar bg="light" expand="md" fixed="top" variant="light" className={classes.navShadow}>
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
            <Nav.Link href  ="/About" className = {classes.topLink}>About Us</Nav.Link>
            <Nav.Link href ="/Projects" className = {classes.topLink}>Projects</Nav.Link>
            <Nav.Link href = "/Students" className = {classes.topLink}>Students</Nav.Link>
            <Nav.Link href = "/Nonprofits" className = {classes.topLink}>Nonprofits</Nav.Link>
            <Nav.Link href = "/Contact" className = {classes.topLink}>Contact Us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
    }
}
export default withRouter(Header);