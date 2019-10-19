import {UserAPI} from "../api/api";
import {toggleInProgress} from "./commonReducer";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

let initialState = {
    users: [],
    currentPage: 1,
    totalCountPage: 0,
    countOnPage: 10,
    isFetching: false
}
const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userID ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userID ? {...u, followed: false} : u)
            }
        case SET_USER:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.page}
        case SET_TOTAL_COUNT:
            return {...state, totalCountPage: action.count}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}

        default :
            return state

    }
}

export const followSuccess = (userID) => ({type: FOLLOW, userID})
export const unfollowSuccess = (userID) => ({type: UNFOLLOW, userID})
export const setUsers = (users) => ({type: SET_USER, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalCount = (count) => ({type: SET_TOTAL_COUNT, count})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export const requestUsers = (page, countOnPage) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    UserAPI.getUsers(page, countOnPage)
        .then(data => {
            return dispatch(setUsers(data.items)),
                dispatch(toggleIsFetching(false)),
                dispatch(setTotalCount(data.totalCount))
        })
}
export const follow = (userId) => (dispatch) => {
    dispatch(toggleInProgress(userId, true))
    UserAPI.followOnUser(userId).then(data => {
        if (data.resultCode === 0) dispatch(followSuccess(userId))
        dispatch(toggleInProgress(userId, false))})

}
export const unfollow = (userId) => (dispatch) => {
    dispatch(toggleInProgress(userId, true))
    UserAPI.unfollowOnUser(userId).then(data => {
        if (data.resultCode === 0) dispatch(unfollowSuccess(userId))
        dispatch(toggleInProgress(userId, false))})

}


export default reducerUser