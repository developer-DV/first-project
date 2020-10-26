import React from 'react';
import HeaderCss from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={HeaderCss.header}>
            <img src='https://static.rfstat.com/renderforest/images/v2/logo-homepage/flat_3.png' />
            <p>Web Messenger</p>
            <div className={HeaderCss.loginBlock}>
                {props.isAuth ? (<><NavLink to='profile'>{props.login}</NavLink> - <button onClick={props.logout}>Logout</button></>): <NavLink to='/login'>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;