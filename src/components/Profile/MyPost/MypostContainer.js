import React from 'react';
import m from './MyPost.module.css'
import {addPost, deletePost} from "../../../Redux/reducerProfile";
import Mypost from "./Mypost";
import {connect} from "react-redux";
import {selectProfileFullName, selectProfilePhotoSmall, selectProfilePosts} from "../../../Redux/ProfileSelector";



let mapStateToProps = (state) =>{
    return {
        posts: selectProfilePosts(state),
        photo: selectProfilePhotoSmall(state),
        fullName: selectProfileFullName(state),
    }
}

const MyPostContainer = connect(mapStateToProps, {addPost, deletePost})(Mypost)

export default MyPostContainer