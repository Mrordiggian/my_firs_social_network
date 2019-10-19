import React from 'react';
import m from './ProfileInfo.module.css'
import photoUser from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";




let ProfileInfo  = (props) => {
    return <div className={m.info}>
            <div className={m.photo} style={{background: `url(${props.state.photos.large || photoUser}) 50% 50% no-repeat /cover`}}></div>
            <div>
                <h3>{props.state.fullName}</h3>
                <ProfileStatus status = {props.status} updateProfileStatus ={props.updateProfileStatus} />
                <span>{props.state.aboutMe}</span>
            </div>
        </div>


}
export default ProfileInfo