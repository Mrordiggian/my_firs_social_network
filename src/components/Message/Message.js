import React from 'react';
import m from './Message.module.css'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utilits/Validators/Validators";
import photoUser from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";



const Message = (props) => {
    let DialogsNames = props.state.dialogs.map(d =><DialogItem key={d.id} id={d.id} name={d.name} ava={d.ava}/>)
    let DialogsMessages = props.state.messages.map(m => <DialogMessage key={m.id} message={m.message} send={m.send}/>)

    let onSubmit = (dataForm) => {
        props.sendMessage(dataForm.newMessage)
    }

    return (
        <div className={m.dialogs}>
           <div className={m.dialogsName}>
               {DialogsNames}
           </div>
            <div className={m.dialogsMessage}>
                <div className={m.dialogsMessage_item}>{DialogsMessages}</div>

            </div>
            <div className={m.messageForm}><ReduxMessageForm onSubmit={onSubmit}/></div>
        </div>
    )
}
export default Message


const DialogMessage = (props) => {
    if(props.send === 'receive') return <div className={m.message}><span>{props.message}</span></div>
    if(props.send === 'send')return <div className={`${m.message} + ${m.right}`}><span>{props.message}</span></div>
}

const DialogItem = (props) => {
    return (
        <div className={m.item}>
            <div className={m.photo} style={{background: `url(${props.ava || photoUser}) 50% 50% no-repeat /cover`}}/>
            <NavLink to={'/message/' + props.id} activeClassName={m.active}>{props.name}</NavLink>
        </div>

    )
}




let maxLength100 = maxLengthCreator(100)
const MessageForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <Field  validate={[required, maxLength100]} name={'newMessage'} placeholder='Enter your message...' cols="30" rows="3" component={Textarea} />
        <div>
            <button>Send message</button>
        </div>
    </form>
}

const ReduxMessageForm = reduxForm({form: 'message'})(MessageForm)