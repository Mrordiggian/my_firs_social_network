import React from 'react';
import m from './Post.module.css'
import { faHeart} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import photoUser from "../../../../assets/images/user.png";

const Post = (props) => {
    return (
    <div className = {m.post}>
        <div className={m.body}>
            <img src={props.profileInfo.photos.small || photoUser}/>
            <div>
                <div className = {m.name}>{props.profileInfo.fullName}</div>
                {props.message}
            </div>
        </div>
      <div>
        <span><FontAwesomeIcon  icon={faHeart} size="lg"/> {props.likecounts}</span>
      </div>
    </div>)
    
  
}
export default Post