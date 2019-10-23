import React from 'react';
import m from './Dialogitem.module.css'
import {NavLink} from "react-router-dom";
import photoUser from "../../../assets/images/user.png";


const DialogItem = (props) => {
    return (
        <div className={m.item}>
            <div className={m.photo} style={{background: `url(${props.ava || photoUser}) 50% 50% no-repeat /cover`}}/>
            <NavLink to={'/message/' + props.id} activeClassName={m.active}>{props.name}</NavLink>
        </div>

    )
}
export default DialogItem