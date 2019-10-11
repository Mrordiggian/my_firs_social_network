import React from 'react';
import m from './Navitem.module.css'
import {NavLink} from "react-router-dom";

const Navitem = (props) =>{
    return(
        <div className={m.item}>
            <NavLink to={props.path} activeClassName={m.active}>{props.content}</NavLink>
        </div>
    )
}

export default Navitem