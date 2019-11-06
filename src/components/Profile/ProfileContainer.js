import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getProfileStatus, updateProfileData, updateProfileStatus, saveMainPhoto} from "../../Redux/reducerProfile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {selectProfileInfo, selectProfileIsOwner, selectProfileStatus} from "../../Redux/ProfileSelector";
import {selectAuthId} from "../../Redux/AuthSelector";



function ProfileContainer(props) {
    useEffect(() => {
            props.getProfile(props.match.params.userID || props.id)
            props.getProfileStatus(props.match.params.userID || props.id)
        },
        [props.match.params.userID]
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

/*
class ProfileContainer extends React.Component {

    componentDidMount() {
        if (this.props.match.params.userID) {
            this.props.getProfile(this.props.match.params.userID)
            this.props.getProfileStatus(this.props.match.params.userID)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.userID != this.props.match.params.userID){
            this.props.getProfile(this.props.match.params.userID)
            this.props.getProfileStatus(this.props.match.params.userID)
        }
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profileInfo: state.ProfilePage.profileInfo,
        id: state.auth.id,
        status: state.ProfilePage.status,
        isOwner: state.ProfilePage.isOwner
    }
}
export default compose(
    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus, updateProfileData}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
*/
