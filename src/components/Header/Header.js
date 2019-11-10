import React from 'react';
import m from './Header.module.css';
import {NavLink} from "react-router-dom";
import {faSignOutAlt} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = ({Logout, state}) => {
    return (
        <header className={m.header}>
            <img src='https://static-s.aa-cdn.net/img/ios/1447600759/a3eb54155fccad3e3b91d8a0da36513e?v=1' alt=''/>
            <div className={m.log}>
                {state.isAuthData
                    ? <div>{state.login}
                        <span className={m.logOut} onClick={Logout}>
                        <FontAwesomeIcon icon={faSignOutAlt} size="lg"/>
                    </span>
                    </div>
                    : <NavLink className={m.logOut} to={'/login'}>Login</NavLink>
                }
            </div>
        </header>)
}
export default Header