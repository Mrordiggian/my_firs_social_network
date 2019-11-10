import React, {useState} from 'react';
import m from './ProfileInfo.module.css'
import photoUser from "../../../assets/images/user.png";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControl/FormsControl";
import {faEdit, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from "../../Login/login.module.css";
import ModalPhoto from "../../../common/Modal/ModalPhoto";


let ProfileInfo = ({profileInfo, isOwner, status, updateProfileStatus, updateProfileData, saveMainPhoto}) => {
    const [editMode, setEditMode] = useState(false)
    const changeProfileData = (dataForm) => {
        updateProfileData(dataForm).then(
            () => {setEditMode(false)})
    }
    const upfatePhoto = (e) => {
        if(e.target.files.length) {
            saveMainPhoto(e.target.files[0])
        }
    }
    return <div className={m.info}>
        <div className={m.ava +' block'}>
            <div
                className={m.photo}
                 style={{background: `url(${profileInfo.photos.large || photoUser}) 50% 50% no-repeat /cover`}}>
                <ModalPhoto  urlPhoto={profileInfo.photos.large}/>
            </div>
            {isOwner &&
            <label className={style.labelFile}>
                <input className={style.inputFile} type='file' onChange={upfatePhoto} accept=".jpg, .jpeg, .png"/>
               Upload photo</label>}
        </div>
        <div className={m.dataInfo + ' block'}>
            <h3>{profileInfo.fullName}</h3>
            <div className={m.status}>
                {isOwner && <ProfileStatus status={status} updateProfileStatus={updateProfileStatus}/>}
                {!isOwner && <div className={m.status_item}>{status}</div>}
            </div>
            {isOwner && !editMode &&
            <div className={m.faEdit} onClick={() => {
                setEditMode(true)
            }}><FontAwesomeIcon className={m.pointer} icon={faEdit} size="lg"/></div>}
            {!editMode && <ProfileData profileInfo={profileInfo}/>}
            {editMode &&  <ProfileDataForm
                setEditMode={setEditMode}
                initialValues={profileInfo}
                onSubmit={changeProfileData}
                profileInfo={profileInfo}/>}
        </div>
    </div>


}
export default ProfileInfo

const Contact = ({title, value}) => {
    return <div className={m.about_element}>
        <b>{title}: </b><a href={value} target="_blank" rel="noopener noreferrer">{value} </a>
    </div>
}

const ProfileData = ({profileInfo}) => {
    return <div className={m.about}>
        <div className={m.about_element}><b>About me: </b><span>{profileInfo.aboutMe}</span></div>
        <div className={m.about_element}><b>Looking for a job: </b><span>{profileInfo.lookingForAJob ? "yes" : "no"}</span></div>
        {profileInfo.lookingForAJob &&
        <div className={m.about_element}><b>Description a job: </b><span>{profileInfo.lookingForAJobDescription}</span></div>}
        <div>
            {Object.keys(profileInfo.contacts).map(key => {
                return profileInfo.contacts[key] && <Contact key={key} title={key} value={profileInfo.contacts[key]}/>
            })}
        </div>
    </div>
}

const ProfileDataForm = reduxForm({form: 'profileData'})(({profileInfo, handleSubmit, setEditMode, error}) => {
    const normalizeBoolean = value => {
        if (value === "true") {
            return true;
        }
        if (value === "false") {
            return false;
        }
        return value;
    };
    return <form onSubmit={handleSubmit}>
        <div className={m.saveForm}>
            <button className={m.pointer}>Save</button>
            <FontAwesomeIcon className={m.pointer} onClick={() => setEditMode(false)} icon={faTimes} size="lg"/>
        </div>
        {error && <div className={style.error}>  {error} </div>}
        <Field validate={[]} name='fullName' type="text"  component={Input}/>
        <div><b>About me: </b></div>
        <Field validate={[]} name='aboutMe' type="text"  component={Textarea}/>
        <div><b>Looking for a job: </b></div>

        <label><Field name='lookingForAJob' type="radio" value={true} normalize={normalizeBoolean} component={'input'} />Yes</label>
        <label><Field name='lookingForAJob' type="radio" value={false} normalize={normalizeBoolean} component={'input'}/>No</label>
        <div><b>Description a job: </b></div>
        <Field validate={[]} name='lookingForAJobDescription' type="text"
               component={Textarea}/>

        <div><b>Contacts: </b>
            {Object.keys(profileInfo.contacts).map(key => {
                return <div key={key}>{key}
                    <Field validate={[]} name={'contacts.' + key} type="text"  component={Input}/>
                </div>
            })}
        </div>
    </form>
})

