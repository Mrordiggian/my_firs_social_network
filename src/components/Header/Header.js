import React from 'react';
import m from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={m.header}>
            <img src='https://static-s.aa-cdn.net/img/ios/1447600759/a3eb54155fccad3e3b91d8a0da36513e?v=1' alt=''/>
            <div className={m.log}>
                {props.state.isAuthData ? props.state.login : <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>)
}
export default Header