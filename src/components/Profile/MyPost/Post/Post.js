import React from 'react';
import m from './Post.module.css'
import {faHeart, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import photoUser from "../../../../assets/images/user.png";

const Post = ({photo, fullName, message, likeCounts, deletePost, id}) => {
    return (
        <div className={m.post + ' block'}>
            <div className={m.header}>
                <img src={photo || photoUser} alt='photo'/>
                <div className={m.name}>{fullName} <button onClick={()=>deletePost(id)}><FontAwesomeIcon icon={faTimes} size="lg"/></button></div>
            </div>
            <div className={m.body}>
                {message}
            </div>
            <div className={m.bottom}>
                <span><FontAwesomeIcon icon={faHeart} size="lg"/> {likeCounts}</span>
            </div>
        </div>)


}
export default Post