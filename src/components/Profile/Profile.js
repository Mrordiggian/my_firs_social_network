import React from 'react';
import MyPostContainer from "./MyPost/MypostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Preloader from "../../common/Preloader/Preloader";




let Profile  = (props) => {
    if(!props.profileInfo) return  <Preloader/>
    return <div>
        <ProfileInfo {...props}/>
        <MyPostContainer/>
    </div>
}
export default Profile