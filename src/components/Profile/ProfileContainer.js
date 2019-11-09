import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getProfileStatus, updateProfileData, updateProfileStatus, saveMainPhoto} from "../../Redux/reducerProfile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {selectProfileInfo, selectProfileIsOwner, selectProfileStatus} from "../../Redux/ProfileSelector";
import {selectAuthId} from "../../Redux/AuthSelector";



function ProfileContainer({match, id, getProfile, getProfileStatus, ...props}) {
    useEffect(() => {
            getProfile(match.params.userID || id)
            getProfileStatus(match.params.userID || id)
        },
        [match, id, getProfile, getProfileStatus]
    )
    return <Profile {...props}/>
}

let mapStateToProps = (state) => {
    return {
        profileInfo: selectProfileInfo(state),
        id: selectAuthId(state),
        status: selectProfileStatus(state),
        isOwner: selectProfileIsOwner(state)
    }
}
export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus, updateProfileData, saveMainPhoto}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

