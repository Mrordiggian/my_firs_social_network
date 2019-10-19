import React from 'react';
import m from './NavBar.module.css'
import Navitem from "./Navitem/Navitem";
import Sidebar from "./Sidebar/Sidebar";

const NavBar = (props) => {


    return <nav className={m.nav}>
        <Navitem path={`/profile/${props.id}`} content='Profile'/>
        <Navitem path='/message' content='Message'/>
        <Navitem path='/news' content='News'/>
        <Navitem path='/music' content='Music'/>
        <Navitem path='/findfriends' content='Find Friends'/>
        <Navitem path='/setting' content='Setting'/>
        <div className={m.sidebar}>
            <Sidebar state = {props.state}/>

        </div>

    </nav>
}
export default NavBar