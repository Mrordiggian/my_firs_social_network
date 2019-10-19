import React from 'react';
import {connect} from "react-redux";
import {follow, getUsers, unfollow} from "../../Redux/reducerUsers";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {toggleInProgress} from "../../Redux/commonReducer";
import {withAuthRedirect} from "../../HOC/withAuthRedirect";
import {compose} from "redux";

class FindsFriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.countOnPage)
    }
    onChangedPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.countOnPage)
    }
    render() {
        return <div>
            {this.props.isFetching && <Preloader/>}
            <Users {...this.props} onChangedPage = {this.onChangedPage}/>
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        state: state.FindFriends.users,
        currentPage: state.FindFriends.currentPage,
        totalCountPage: state.FindFriends.totalCountPage,
        countOnPage: state.FindFriends.countOnPage,
        isFetching: state.FindFriends.isFetching,
        inProgress: state.common.inProgress
    }
}


export default compose(connect(mapStateToProps,{follow, unfollow, toggleInProgress, getUsers}),
    withAuthRedirect)(FindsFriendsContainer)

