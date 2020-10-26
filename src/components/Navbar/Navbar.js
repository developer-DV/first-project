import React from 'react';
import NavCss from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className={NavCss.nav}>
            <div className={NavCss.item}><NavLink to="/profile" activeClassName={NavCss.active}>Profile</NavLink></div>
            <div className={NavCss.item}><NavLink to="/dialogs" activeClassName={NavCss.active}>Messages</NavLink></div>
            <div className={NavCss.item}><NavLink to="/users" activeClassName={NavCss.active}>Users</NavLink></div>
            <div className={NavCss.item}><NavLink to="/news" activeClassName={NavCss.active}>News</NavLink></div>
            <div className={NavCss.item}><NavLink to="/music" activeClassName={NavCss.active}>Music</NavLink></div>
            <div className={NavCss.item}><a>Settings</a></div>
        </nav>
    );
}

export default Navbar;