import React from 'react';
import m from './Navitem.module.css'
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Navitem = ({path, content, icon}) =>{
    return(
            <NavLink className={m.item} to={path} activeClassName={m.active}>
                <div>
                <span className={m.awesome}><FontAwesomeIcon  icon={icon} size="lg"/></span>
                {content}
                </div>
            </NavLink>

    )
}

export default Navitem