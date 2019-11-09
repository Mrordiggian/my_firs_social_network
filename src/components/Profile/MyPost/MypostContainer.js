import React, {useEffect, useState} from 'react';
import {addPost, deletePost, getPosts, cleanPostState} from "../../../Redux/reducerProfile";
import Mypost from "./Mypost";
import {connect} from "react-redux";
import {
    selectProfileFullName, selectProfileIsOwner,
    selectProfilePhotoSmall,
    selectProfilePosts
} from "../../../Redux/ProfileSelector";


const MyPostContainer = ({getPosts, isOwner, cleanPostState, ...props}) => {
    let [page, setPage] = useState(1);
    let [isFetching, setFetching] = useState(false);
    useEffect( ()=>{
       cleanPostState()
    },[cleanPostState]);
    useEffect(() => {
        window.scrollTo(0, 0)
        let func = async () => {
            setFetching(true);
            await getPosts(page);
            setFetching(false)
        };
        isOwner && func()
    }, [page, getPosts, isOwner]);
    useEffect(() => {
        let populate = () => {
            let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
            if (!isFetching && windowRelativeBottom < document.documentElement.clientHeight + 100) {
                page <= 10 && setPage(page++)
            }
        };
        window.addEventListener('scroll', populate);
        return () => window.removeEventListener('scroll', populate)
    });
    return <Mypost {...props}/>
};

let mapStateToProps = (state) => {
    return {
        posts: selectProfilePosts(state),
        photo: selectProfilePhotoSmall(state),
        fullName: selectProfileFullName(state),
        isOwner: selectProfileIsOwner(state)
    }
};

export default connect(mapStateToProps, {addPost, deletePost, getPosts, cleanPostState})(MyPostContainer)