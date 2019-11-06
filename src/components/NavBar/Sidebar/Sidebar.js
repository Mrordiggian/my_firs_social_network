import React from 'react';
import m from './Sidebar.module.css'

const Sidebar = (props) => {
    return <div className={m.sidebar}>
        <div className={m.sidebar__header}>You know these people?</div>
        {props.state.map(s =>
        <div key={s.id} className={m.sidebar__item}>
            <img src={s.ava} alt=""/>
            <span>{s.name}</span>
        </div>)}
    </div>

}

export default Sidebar