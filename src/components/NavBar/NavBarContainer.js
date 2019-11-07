import React from 'react';
import NavBar from "./NavBar";
import {connect} from "react-redux";
import {selectAuthId} from "../../Redux/AuthSelector";


let mapStateToProps = (state) =>{
    return {
        state: state.Sidebar,
        id: selectAuthId(state)
    }
}
const NavBarContainer = connect(mapStateToProps)(NavBar)

export default NavBarContainer