import React from 'react';
import m from './Profile.module.css'
import {connect} from "react-redux";
import Profile from "./Profile";
import {getProfile, getProfileStatus, updateProfileStatus} from "../../Redux/reducerProfile";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {

    componentDidMount() {
        if (this.props.match.params.userID) {
            this.props.getProfile(this.props.match.params.userID)
            this.props.getProfileStatus(this.props.match.params.userID)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.match.params.userID !== this.props.match.params.userID){
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
        state: state.ProfilePage.profileInfo,
        id: state.auth.id,
        status: state.ProfilePage.status
    }
}
export default compose(

    connect(mapStateToProps, {getProfile, getProfileStatus, updateProfileStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
