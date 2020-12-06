import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import Logo from '../hack4impactLogo.png';


const mStyle = {
    color: 'black', 
    fontFamily: 'Avenir'
}

const hStyle = {
    fontFamily: 'Avenir',
    color: 'black',
    paddingBottom: 5,
    fontSize: 24
}


const Footer = () => {
    return (
      <footer style={{backgroundColor:"#FFFFFF", minHeight: 250, paddingTop:40, paddingBottom: 20, marginTop:10}}>
        <Container>
           <Row>
             <Col md="4">
                <div>
                    <img src= {Logo} alt="Hack4Impact Logo" height="40" width="auto" style={{marginBottom: 30}}/> 
                </div>
                <div className="text-label" style={{marginBottom: 15, fontFamily: 'Avenir'}}>
                    If you have any questions, please contact UMD@hack4impact.org.
                </div>
            </Col>
            

            <div className="col-md-1" style={{paddingTop:50}}/>
            <div className="col-md-2" style={{marginTop:30, marginRight:15}}>
               <div className="footer-label" style={hStyle}>Quick Links</div>
               <div>
                    <NavLink exact to="/About" style={mStyle}>About Us</NavLink>
                </div>
                <div>
                <   NavLink exact to="/Projects" style={mStyle}>Projects</NavLink>
                </div>
                <div>
                    <NavLink exact to="/Contact" style={mStyle}>Contact Us</NavLink>
                </div>
              
            </div>

           
            <div className="col-md-2" style={{marginTop:30}}>
                <div className="footer-label" style={hStyle}>Apply</div>
                  <div>
                    <NavLink exact to="/Students" style={mStyle}>Students</NavLink>
                  </div>
                  <div>
                   <NavLink exact to="/Nonprofits" style={mStyle} >Nonprofits</NavLink>
                  </div> 
             </div>
            

            <div className="col-md-2" style={{marginTop: 30}}>
                <div className="footer-label" style={hStyle}>Find us On</div>
                <div>
                    <a className="footer-link" href="mailto:umd@hack4impact.org" style={mStyle}>Email</a>
                </div>
                <div>
                    <a className="footer-link" href="https://www.facebook.com/hack4impactumd" target="_blank" style={mStyle}>Facebook</a>
                </div>
                <div>
                <a className="footer-link" href="https://github.com/Hack4Impact-UMD" target="_blank" style={mStyle}>Github</a>
                </div>
                
            </div>


            <div>
               
            </div>

            </Row>
           
        </Container>
        
    </footer>
        
    )
}
export default Footer;