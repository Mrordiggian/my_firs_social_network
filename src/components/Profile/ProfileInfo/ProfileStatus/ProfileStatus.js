import React, {useState, useEffect} from 'react';


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    const activateEditMode =() => {
        setEditMode(true)
    }
    const deActivateEditMode =() => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }
    const changeStatus =(e) => {
        setStatus(e.currentTarget.value)
    }
    useEffect(()=>{
        setStatus(props.status)
    },[props.status])
    return <div>
        {!editMode &&<div>
            <span  onDoubleClick={activateEditMode}>{props.status || 'Set status'}</span>
        </div>}
        {editMode &&
        <div>
            <input autoFocus={true} onBlur={deActivateEditMode} value={status}
                   onChange={changeStatus}/>
        </div>
        }

    </div>

}

export default ProfileStatus