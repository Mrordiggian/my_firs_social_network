import React from 'react';
import {connect} from "react-redux";
import {followAC, setCurrentPageAC, setTotalCountAC, setUsersAC, unfollowAC} from "../../Redux/reducerUsers";
import * as axios from "axios";
import Users from "./Users";

class FindFriendsComponent extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countOnPage}`).then(response => {
            return this.props.setUsers(response.data.items),
                this.props.setTotalCount(response.data.totalCount)
        })
    }
    onChangedPage = (el) => {
        this.props.setCurrentPage(el)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.countOnPage}`).then(response => {
            return this.props.setUsers(response.data.items)
        })
    }



    render() {
        return <Users totalCountPage = {this.props.totalCountPage}
                      countOnPage = {this.props.countOnPage}
                      currentPage = {this.props.currentPage}
                      state = {this.props.state}
                      unfollow = {this.props.unfollow}
                      follow = {this.props.follow}
                      onChangedPage = {this.onChangedPage}
        />
    }
}

let mapStateToProps = (state) =>{
    return {
        state: state.FindFriends.users,
        currentPage: state.FindFriends.currentPage,
        totalCountPage: state.FindFriends.totalCountPage,
        countOnPage: state.FindFriends.countOnPage,
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
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalCount: (count) => {
            dispatch(setTotalCountAC(count))
        }

    }
}

const FindsFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(FindFriendsComponent)
export default FindsFriendsContainer