import React from 'react';
import {connect} from "react-redux";
import {follow, requestUsers, unfollow} from "../../Redux/reducerUsers";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {toggleInProgress} from "../../Redux/commonReducer";
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {
    getCountOnPage,
    getCurrentPage,
    getInProgress,
    getIsFetching,
    getUsers,
    totalCountPage
} from "../../Redux/UsersSelector";

class FindsFriendsContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.countOnPage)
    }
    onChangedPage = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.countOnPage)
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
        state: getUsers(state),
        currentPage: getCurrentPage(state),
        totalCountPage: totalCountPage(state),
        countOnPage: getCountOnPage (state),
        isFetching: getIsFetching (state),
        inProgress: getInProgress (state)
    }
}


export default compose(connect(mapStateToProps,{follow, unfollow, toggleInProgress, requestUsers}),
    withAuthRedirect)(FindsFriendsContainer)

