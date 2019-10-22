import React from 'react';
import m from './Message.module.css'
import DialogItem from "./DialogItem/DialogItem";
import DialogMessage from "./DialogMessage/DialogMessage";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../utilits/Validators/Validators";



const Message = (props) => {
    let DialogsNames = props.state.dialogs.map(d =><DialogItem id={d.id} name={d.name} ava={d.ava}/>)
    let DialogsMessages = props.state.messages.map(m => <DialogMessage message={m.message} send={m.send}/>)

    let onSubmit = (dataForm) => {
        props.sendMessage(dataForm.newMessage)
    }

    return (
        <div className={m.dialogs}>
           <div className={m.dialogsName}>
               {DialogsNames}
           </div>
            <div className={m.dialogsMessage}>
                {DialogsMessages}
                <ReduxMessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    )
}
export default Message


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