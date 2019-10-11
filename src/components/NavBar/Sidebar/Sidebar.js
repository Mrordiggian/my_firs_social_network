import React from 'react';
import m from './Sidebar.module.css'

const Sidebar = (props) => {
    return (
        <div className={m.sidebar__item}>
            <img src={props.ava} alt=""/>
            <span>{props.name}</span>
        </div>

    )
}

export default Sidebar