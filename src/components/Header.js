import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './header.module.css';

const navItems = [
    {
        name: "About Us",
        to: "/About"
    },
    {
        name: "Projects",
        to: "/Projects"
    },
    {
        name: "Students",
        to: "/Students"
    },
    {
        name: "Nonprofits",
        to: "/Nonprofits"
    },
    {
        name: "Contact Us",
        to: "/Contact"
    }
]

const Header = () => {

    // const [click, setClick] = React.useState(false);
    // const handleClick = () => {
    //     setClick(!click);
    //     console.log(click);
    // }

    return (
        <div className={classes.container}>
            <div className={classes.logoContainer}>
                <NavLink to="/" className={classes.logoLink}><span><img className={classes.logoImg} src="../../favicon.PNG" alt="Hack4Impact Logo" />
                    <span className={classes.logoMainText}>Hack4Impact</span>
                umd</span></NavLink>
            </div>
            <nav className={classes.navContainer}>
                <ul className={classes.navLinks}>
                    {/* {navItems.map( navItem => (<li key={navItem.name}><a href={navItem.href} onClick={handleClick} className={`${classes.navLink} ${click ? classes.navLinkSelected : classes.navLink}`}>{navItem.name}</a></li>))} */}
                    {navItems.map( navItem => (<li key={navItem.name} className={classes.navLinksItems}><NavLink to={navItem.to} className={classes.navLink} activeClassName={classes.navLinkSelected}>{navItem.name}</NavLink></li>))}
                </ul>
            </nav>
        </div>
    )
}
export default Header;