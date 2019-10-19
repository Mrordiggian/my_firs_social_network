import {ProfileAPI, UserAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    posts: [
        {id: 0, message: 'My post', likecounts: '10'},
        {id: 1, message: 'My post', likecounts: '15'},
        {id: 2, message: 'My post', likecounts: '20'},
    ],
    profileInfo: null,
    status: null
}
const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.message,
                likecounts: 0
            }
            return {
                ...state,
                posts : [...state.posts, newPost],
                newtext : ''
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profileInfo : action.profileInfo}
        }
        case SET_STATUS: {
            return {...state, status : action.status}
        }
        default :
            return state

    }
}

export const addPost = (message) => ({type: ADD_POST, message})
export const setUserProfile = (profileInfo) => ({type: SET_USER_PROFILE, profileInfo})
export const setStatus = (status) => ({type: SET_STATUS, status})


export const getProfile =(userID) => (dispatch) => {
    ProfileAPI.getProfileData(userID).then(data => {
        return dispatch(setUserProfile(data))
    })
}
export const getProfileStatus =(userID) => (dispatch) => {
    ProfileAPI.getStatus(userID).then(response => {
        return dispatch(setStatus(response.data))
    })
}
export const updateProfileStatus =(status) => (dispatch) => {
    ProfileAPI.updateStatus(status).then(response => {
        return response.data.resultCode === 0 && dispatch(setStatus(status))
    })
}


export default reducerProfile