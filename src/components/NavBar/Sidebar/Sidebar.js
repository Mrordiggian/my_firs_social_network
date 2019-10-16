import React from 'react';
import m from './Sidebar.module.css'

const Sidebar = (props) => {
    return props.state.map(s =>
        <div className={m.sidebar__item}>
            <img src={s.ava} alt=""/>
            <span>{s.name}</span>
        </div>)

}

export default Sidebar