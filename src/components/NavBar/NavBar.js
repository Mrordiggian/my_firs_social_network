import React from 'react';
import m from './NavBar.module.css'
import Navitem from "./Navitem/Navitem";
import Sidebar from "./Sidebar/Sidebar";
import {faBookmark, faCog, faComment, faMusic, faSearch, faUserCircle} from "@fortawesome/free-solid-svg-icons";

const NavBar = (props) => {


    return <nav className={m.nav}>
        <Navitem path={`/profile/${props.id}`} content='Profile' icon={faUserCircle}/>
        <Navitem path='/message' content='Message' icon={faComment}/>
        <Navitem path='/news' content='News' icon={faBookmark}/>
        <Navitem path='/music' content='Music' icon={faMusic}/>
        <Navitem path='/findfriends' content='Find Friends' icon={faSearch}/>
        <Navitem path='/setting' content='Setting' icon={faCog}/>
        <div className={m.sidebar}>
            <Sidebar state = {props.state}/>

        </div>

    </nav>
}
export default NavBar