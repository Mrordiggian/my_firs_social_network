import React from 'react';
import m from './MyPost.module.css'
import {addPostCreateAction, updateTextPostCreateAction} from "../../../Redux/reducerProfile";
import Mypost from "./Mypost";
import {connect} from "react-redux";


/*
const MyPostContainer = (props) => {
    let state = props.store.getState().ProfilePage
    let AddPost = () => {
        props.store.dispatch(addPostCreateAction())
    }
    let onChangetext = (text) =>{
        props.store.dispatch(updateTextPostCreateAction(text))
    }

    return <Mypost AddPost={AddPost} UpdatePostText={onChangetext} state={state}/>
}*/
let mapStateToProps = (state) =>{
    return {
        state: state.ProfilePage
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        UpdatePostText: (text) =>{
            dispatch(updateTextPostCreateAction(text))},
        AddPost: () =>{
            dispatch(addPostCreateAction())}
    }
}
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(Mypost)

export default MyPostContainer