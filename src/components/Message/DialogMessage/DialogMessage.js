import React from 'react';
import m from './DialogMessage.module.css'


const DialogMessage = (props) => {
    if(props.send == 'receive') return <div className={m.message}><span>{props.message}</span></div>
    if(props.send == 'send')return <div className={`${m.message} + ${m.right}`}><span>{props.message}</span></div>


}
export default DialogMessage