import React from 'react';
import m from './Message.module.css'
import {sendMessage} from "../../Redux/reducerMessage";
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) =>{
    return {
        state: state.MessagePage,
        newtextMessage: state.MessagePage.newtextMessage
    }
}

const MessageContainer = compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Message)

export default MessageContainer