import React from 'react';
import {connect} from "react-redux";
import {follow, requestUsers, setCurrentPage, unfollow} from "../../Redux/reducerUsers";
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

    populate = () => {
        console.log('populate')
        let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
        if (!this.props.isFetching && windowRelativeBottom < document.documentElement.clientHeight + 100) {this.props.requestUsers( this.props.currentPage + 1, this.props.countOnPage)};
    }

    componentDidMount() {
        console.log('didmount')
        this.props.requestUsers(this.props.currentPage, this.props.countOnPage)
        window.addEventListener('scroll', this.populate)
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.populate)
    }

    // onChangedPage = (pageNumber) => {
    //     this.props.requestUsers(pageNumber, this.props.countOnPage)
    // }
    render() {
        return <div className={'block'}>
            {this.props.isFetching && <Preloader/>}
            <Users {...this.props} />
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


export default compose(
    connect(mapStateToProps,{follow, unfollow, toggleInProgress, requestUsers, setCurrentPage}),
    withAuthRedirect)(FindsFriendsContainer)

