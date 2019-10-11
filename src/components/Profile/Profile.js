import React from 'react';
import m from './Profile.module.css'
import MyPostContainer from "./MyPost/MypostContainer";



const Profile = (props) => {
    return <div>
        <div className={m.wapper}>
        </div>
        <div className={m.ava}>ava + description</div>
        <MyPostContainer/>
    </div>
}
export default Profile