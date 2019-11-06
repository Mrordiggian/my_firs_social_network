import React from 'react';
import m from './MyPost.module.css'
import {addPost} from "../../../Redux/reducerProfile";
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

const MyPostContainer = connect(mapStateToProps, {addPost})(Mypost)

export default MyPostContainer