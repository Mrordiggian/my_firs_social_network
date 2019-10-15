import React from 'react';
import m from './Profile.module.css'
import MyPostContainer from "./MyPost/MypostContainer";
import Preloader from "../../common/Preloader/Preloader";




let Profile  = (props) => {
    if(!props.state) return <Preloader/>
    return <div>
        <div className={m.wapper}>
        </div>
        <div className={m.info}>
            <img src={props.state.photos.large} alt=""/>
            <div>
                <h3>{props.state.fullName}</h3>
                <span>{props.state.aboutMe}</span>
            </div>
        </div>
        <MyPostContainer/>
    </div>
}
export default Profile