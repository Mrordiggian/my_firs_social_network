import React from 'react';
import m from './NavBar.module.css'
import NavBar from "./NavBar";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        state: state.Sidebar,
        id: state.auth.id
    }
}
const NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer