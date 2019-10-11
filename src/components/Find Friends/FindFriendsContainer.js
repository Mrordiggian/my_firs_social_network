import React from 'react';
import {connect} from "react-redux";
import FindFriends from "./FindFriends";
import {followAC, setUsersAC, unfollowAC} from "../../Redux/reducerUsers";

let mapStateToProps = (state) =>{
    return {
        state: state.FindFriends.users
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unfollow: (userID) => {
            dispatch(unfollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
}
const FindsFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FindFriends)
export default FindsFriendsContainer