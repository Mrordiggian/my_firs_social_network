import React from 'react';
import m from './Profile.module.css'
import {connect} from "react-redux";
import Profile from "./Profile";
import {setUserProfile} from "../../Redux/reducerProfile";
import {withRouter} from "react-router-dom";
import {UserAPI} from "../../api/api";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = this.props.id
        UserAPI.getProfileData(userID).then(data => {
            return this.props.setUserProfile(data)
        })
    }

    render() {
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.ProfilePage.profileInfo,
        id: state.auth.id
    }
}
export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))