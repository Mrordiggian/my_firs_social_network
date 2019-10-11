import React from 'react';
import m from './Message.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";

const Message = (props) => {
    let DialogsNames = props.state.dialogs.map(d =><DialogItem id={d.id} name={d.name} ava={d.ava}/>)
    let DialogsMessages = props.state.messages.map(m => <DialogMessage message={m.message} send={m.send}/>)

    let onChangeupdate = (e) => {
        let text = e.target.value
        props.UpdateMessageText(text)
    }

    return (
        <div className={m.dialogs}>
           <div className={m.dialogsName}>
               {DialogsNames}
           </div>
            <div className={m.dialogsMessage}>
                {DialogsMessages}
                <div>
                    <textarea onChange={onChangeupdate} placeholder='Enter your message...' cols="30" rows="3" value={props.newtextMessage}></textarea>
                    <div>
                        <button onClick={props.sendMessage}>Send message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Message