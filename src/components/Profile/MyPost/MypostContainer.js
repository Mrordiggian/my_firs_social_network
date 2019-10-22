import React from 'react';
import m from './MyPost.module.css'
import {addPost} from "../../../Redux/reducerProfile";
import Mypost from "./Mypost";
import {connect} from "react-redux";



let mapStateToProps = (state) =>{
    return {
        state: state.ProfilePage.posts
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost})(Mypost)

export default MyPostContainer