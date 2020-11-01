import React from 'react';
import { SocialIcon } from 'react-social-icons'
import { NavLink } from 'react-router-dom';
import classes from './header.module.css';

const abtItem = [
    {
        name: "About",
        to: "/About"
    }
]

const sdtItem = [
    {
        name: "Students",
        to: "/Students"
    }
]

const pjtItem = [
    {
        name: "Projects",
        to: "/Projects"
    }
]

const nptItem = [
    {
        name: "Nonprofits",
        to: "/Nonprofits"
    }
]


const ctItem = [
    {
        name: "Contact",
        to: "/Contact"
    }
]

const fbk = [
    {
        name: "Facebook",
        to: "https://www.facebook.com/hack4impactumd/"
    }
]


const Footer = () => {
    return (
      <div className="Footer" style={{backgroundColor:"#64ab8a", minHeight:250, paddingTop:40}}>
        <div className={classes.logoContainer} >
            <div style={{marginBottom: 15}}>
            <NavLink to="/" className={classes.logoLink} style={{fontWeight: 'bold'}}>
            
                <span className={classes.logoMainText} style={{color: 'white', fontWeight: 'bold', marginLeft: 40}}>Hack4Impact</span>umd
                <span className={classes.logoMainText} style={{color: 'white', fontWeight: 'bold', marginLeft: 85, fontFamily: 'Courier New'}}> Quick Links</span>
                <span className={classes.logoMainText} style={{color: 'white', fontWeight: 'bold', marginLeft: 85, fontFamily: 'Courier New'}}> Apply </span>
                <span className={classes.logoMainText} style={{color: 'white', fontWeight: 'bold', marginLeft: 85, fontFamily: 'Courier New'}}> Support </span>

            </NavLink>
            </div>
            

            <nav className={classes.navContainer}>
                <ul className={classes.navLinks}>
                    {abtItem.map( navItem => (<div key={navItem.name} className={classes.navLinksItems}><NavLink exact to={navItem.to} className={classes.navLink} activeClassName={classes.navLinkSelected} style={{color: 'white', fontWeight: 'bold', fontFamily: 'Courier New', marginLeft: 350}}>{navItem.name}</NavLink></div>))}
                    {sdtItem.map( navItem => (<div key={navItem.name} className={classes.navLinksItems}><NavLink exact to={navItem.to} className={classes.navLink} activeClassName={classes.navLinkSelected} style={{color: 'white', fontWeight: 'bold', fontFamily: 'Courier New', marginLeft: 200}}>{navItem.name}</NavLink></div>))}
                    {fbk.map( navItem => (<div key={navItem.name} className={classes.navLinksItems}><NavLink exact to={navItem.to} className={classes.navLink} activeClassName={classes.navLinkSelected} style={{color: 'white', fontWeight: 'bold', fontFamily: 'Courier New', marginLeft: 95}}>{navItem.name}</NavLink></div>))}
                </ul>
            </nav>

            <nav className={classes.navContainer} style={{marginTop: 15}}>
                <ul className={classes.navLinks}>
                    {pjtItem.map( navItem => (<div key={navItem.name} className={classes.navLinksItems}><NavLink exact to={navItem.to} className={classes.navLink} activeClassName={classes.navLinkSelected} style={{color: 'white', fontWeight: 'bold', fontFamily: 'Courier New', marginLeft: 350}}>{navItem.name}</NavLink></div>))}
                    {nptItem.map( navItem => (<div key={navItem.name} className={classes.navLinksItems}><NavLink exact to={navItem.to} className={classes.navLink} activeClassName={classes.navLinkSelected} style={{color: 'white', fontWeight: 'bold', fontFamily: 'Courier New', marginLeft: 173}}>{navItem.name}</NavLink></div>))}
                </ul>
            </nav>

            <nav className={classes.navContainer} style={{marginTop: 15, marginBottom: 10}}>
                <ul className={classes.navLinks}>
                    {ctItem.map( navItem => (<div key={navItem.name} className={classes.navLinksItems}><NavLink exact to={navItem.to} className={classes.navLink} activeClassName={classes.navLinkSelected} style={{color: 'white', fontWeight: 'bold', fontFamily: 'Courier New', marginLeft: 350}}>{navItem.name}</NavLink></div>))}
                </ul>
            </nav>

            <div>
               
            </div>
            
        </div>
        
    </div>
        
    )
}
export default Footer;