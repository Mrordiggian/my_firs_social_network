import React from 'react';
import m from './Dialogitem.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    return (
        <div className={m.item}>
            <img src={props.ava}/>
            <NavLink to={'/message/' + props.id} activeClassName={m.active}>{props.name}</NavLink>
        </div>

    )
}
export default DialogItem