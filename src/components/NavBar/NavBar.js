import React from 'react';
import m from './NavBar.module.css'
import Navitem from "./Navitem/Navitem";
import Sidebar from "./Sidebar/Sidebar";

const NavBar = (props) => {
   let SideBarElements = props.state.map(s => <Sidebar name={s.name} ava={s.ava}/> )
    return <nav className={m.nav}>
        <Navitem path='/profile' content='Profile'/>
        <Navitem path='/message' content='Message'/>
        <Navitem path='/news' content='News'/>
        <Navitem path='/music' content='Music'/>
        <Navitem path='/findfriends' content='Find Friends'/>
        <Navitem path='/setting' content='Setting'/>
        <div className={m.sidebar}>
            {SideBarElements}
        </div>

    </nav>
}
export default NavBar