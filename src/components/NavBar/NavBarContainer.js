import React from 'react';
import m from './NavBar.module.css'
import Navitem from "./Navitem/Navitem";
import Sidebar from "./Sidebar/Sidebar";
import NavBar from "./NavBar";
import {connect} from "react-redux";

/*const NavBarContainer = (props) => {
   let state = props.store.getState().Sidebar
    return <NavBar state={state}/>
}*/
let mapStateToProps = (state) =>{
    return {
        state: state.Sidebar
    }
}
const NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer