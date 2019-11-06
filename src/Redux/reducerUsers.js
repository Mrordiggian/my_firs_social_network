import {UserAPI} from "../api/api";
import {toggleInProgress} from "./commonReducer";
import {updateObject} from "../utilits/object_helpers";

const FOLLOW = 'users_FOLLOW';
const UNFOLLOW = 'users_UNFOLLOW';
const SET_USER = 'users_SET_USER';
const SET_CURRENT_PAGE = 'users_SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'users_SET_TOTAL_COUNT';
const TOGGLE_IS_FETCHING = 'users_TOGGLE_IS_FETCHING';

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
                users: updateObject(state.users, 'id', action.userID, {followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObject(state.users, 'id', action.userID, {followed: false})
            }
        case SET_USER:
            return {...state, users: [...state.users, ...action.users]}
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

export const requestUsers = (page, countOnPage) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))
    let data = await UserAPI.getUsers(page, countOnPage)
    dispatch(setUsers(data.items))
    dispatch(toggleIsFetching(false))
    dispatch(setTotalCount(data.totalCount))

}
const  followUnFollowFlow = async (userId, APIMethod, actionCreator, dispatch ) => {
    dispatch(toggleInProgress(userId, true))
    let data = await APIMethod(userId)
    if (data.resultCode === 0) dispatch(actionCreator(userId))
    dispatch(toggleInProgress(userId, false))


}
export const follow = (userId) => (dispatch) => {
    followUnFollowFlow(userId,  UserAPI.followOnUser, followSuccess, dispatch)
}
export const unfollow = (userId) => (dispatch) => {
    followUnFollowFlow(userId,  UserAPI.unfollowOnUser, unfollowSuccess, dispatch)
}


export default reducerUser