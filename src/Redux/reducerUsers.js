const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USER = 'SET_USER';

let initialState = {
    users: []
}
const reducerUser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u =>
                    u.id === action.userID ? {...u, folowed: true} : u)
            }
        case UNFOLLOW:
            debugger
            return {
                ...state,
                users: state.users.map(u =>
                        u.id === action.userID ? {...u, folowed: false} : u)
            }
        case SET_USER:
            return {...state, users: [...state.users, ...action.users]}

        default :
            return state

    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USER, users})


export default reducerUser