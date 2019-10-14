const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';

let initialState = {
    users: [],
    currentPage: 1,
    totalCountPage: 0,
    countOnPage: 10
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
            debugger
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

        default :
            return state

    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USER, users})
export const setCurrentPageAC = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalCountAC = (count) => ({type: SET_TOTAL_COUNT, count})


export default reducerUser