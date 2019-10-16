import React from 'react';
import m from './Profile.module.css'
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile} from "../../Redux/reducerProfile";
import {Redirect, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userID = this.props.match.params.userID
        if (!userID) userID = this.props.id
        this.props.getProfile(userID)
    }

    render() {
        // if(!this.props.isAuthData) return <Redirect to={'/login'}/>
        return <Profile {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.ProfilePage.profileInfo,
        id: state.auth.id,

    }
}
export default connect(mapStateToProps, {getProfile})(withRouter(withAuthRedirect(ProfileContainer)))