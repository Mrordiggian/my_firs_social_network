import React from 'react';
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setTotalCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "../../Redux/reducerUsers";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {UserAPI} from "../../api/api";

class FindsFriendsContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        UserAPI.getUsers(this.props.currentPage, this.props.countOnPage)
            .then(data => {
                return this.props.setUsers(data.items),
                    this.props.toggleIsFetching(false),
                    this.props.setTotalCount(data.totalCount)
            })
    }
    onChangedPage = (el) => {
        this.props.setCurrentPage(el)
        this.props.toggleIsFetching(true)
        UserAPI.getUsers(el, this.props.countOnPage)
            .then(data => {
                return this.props.setUsers(data.items),
                    this.props.toggleIsFetching(false)
            })
    }
    render() {
        return <div>
            {this.props.isFetching && <Preloader/>}
            <Users totalCountPage={this.props.totalCountPage}
                   countOnPage={this.props.countOnPage}
                   currentPage={this.props.currentPage}
                   state={this.props.state}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   onChangedPage={this.onChangedPage}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.FindFriends.users,
        currentPage: state.FindFriends.currentPage,
        totalCountPage: state.FindFriends.totalCountPage,
        countOnPage: state.FindFriends.countOnPage,
        isFetching: state.FindFriends.isFetching
    }
}


export default connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalCount, toggleIsFetching})(FindsFriendsContainer)
