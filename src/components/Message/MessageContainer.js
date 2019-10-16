import React from 'react';
import m from './Message.module.css'
import {onChangeCreateAction, sendMessageCreateAction} from "../../Redux/reducerMessage";
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

let mapStateToProps = (state) =>{
    return {
        state: state.MessagePage,
        newtextMessage: state.MessagePage.newtextMessage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        UpdateMessageText: (text) =>{
            dispatch(onChangeCreateAction(text))},
        sendMessage: () =>{
            dispatch(sendMessageCreateAction())}
    }
}
const MessageContainer = connect(mapStateToProps, mapDispatchToProps)( withAuthRedirect(Message))
export default MessageContainer