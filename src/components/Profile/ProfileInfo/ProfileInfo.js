import React from 'react';
import m from './ProfileInfo.module.css'
import photoUser from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";




let ProfileInfo  = ({profileInfo, status, updateProfileStatus}) => {
    return <div className={m.info}>
            <div className={m.photo} style={{background: `url(${profileInfo.photos.large || photoUser}) 50% 50% no-repeat /cover`}}/>
            <div>
                <h3>{profileInfo.fullName}</h3>
                <ProfileStatus status = {status} updateProfileStatus ={updateProfileStatus} />
                <div>
                    <div><b>About me: </b><span>{profileInfo.aboutMe}</span></div>
                    <div><b>Looking for a job: </b><span>{profileInfo.lookingForAJob? "yes" : "no"}</span></div>
                    {profileInfo.lookingForAJob && <div><b>Description a job: </b><span>{profileInfo.lookingForAJobDescription}</span></div>}
                    <div><b>Contacts: </b>
                        {Object.keys(profileInfo.contacts).map(key => {
                            return <Contact key={key} title={key} value={profileInfo.contacts[key]} />
                        })}
                    </div>
                </div>
            </div>
        </div>

}
export default ProfileInfo

const Contact = ({title, value}) => {
    return <div className={m.contact}>
        <b>{title}: </b><span>{value} </span>
    </div>
}
/*
profileInfo: {
    aboutMe: null,
        contacts: {
        facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
    },
    lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: 'mordiggian',
        userId: 3858,
        photos: {
        small: null,
            large: null
    }
},*/
