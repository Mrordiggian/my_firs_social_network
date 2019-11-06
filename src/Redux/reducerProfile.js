import {ProfileAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'profile_ADD_POST';
const SET_USER_PROFILE = 'profile_SET_USER_PROFILE';
const SET_STATUS = 'profile_SET_STATUS';
const DELETE_POST = 'profile_DELETE_POST';
const SET_OWNER = 'profile_SET_OWNER';
const SET_PHOTO = 'profile_SET_PHOTO';


let initialState = {
    posts: [
        {id: 0, message: 'My post', likecounts: '10'},
        {id: 1, message: 'My post', likecounts: '15'},
        {id: 2, message: 'My post', likecounts: '20'},
    ],
    profileInfo: null,
    status: null,
    isOwner: false
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
                posts: [...state.posts, newPost],
                newtext: ''
            }
        }
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id != action.id)}
        }
        case SET_OWNER: {
            return {...state, isOwner: action.isOwner}
        }
        case SET_USER_PROFILE: {
            return {...state, profileInfo: action.profileInfo}
        }
        case SET_STATUS: {
            return {...state, status: action.status}
        }
        case SET_PHOTO: {
            return {...state, profileInfo : { ...state.profileInfo, photos: action.photo}}
        }
        default :
            return state

    }
}

export const addPost = (message) => ({type: ADD_POST, message})
export const setUserProfile = (profileInfo) => ({type: SET_USER_PROFILE, profileInfo})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (id) => ({type: DELETE_POST, id})
export const setOwner = (isOwner) => ({type: SET_OWNER, isOwner})
export const saveMainPhotoSuccess = (photo) => ({type: SET_PHOTO, photo})


export const getProfile = (userID) => async (dispatch, getState) => {
    let state = getState()
    dispatch(setUserProfile(null))
    userID == state.auth.id ? dispatch(setOwner(true)): dispatch(setOwner(false))
    let data = await ProfileAPI.getProfileData(userID)
    dispatch(setUserProfile(data))

}
export const getProfileStatus = (userID) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userID)
    dispatch(setStatus(response.data))
}
export const updateProfileStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status)
    response.data.resultCode === 0 && dispatch(setStatus(status))
}
export const updateProfileData = (data) => async (dispatch, getState) => {
    const state = getState()
    let response = await ProfileAPI.updateProfileData(data)
    if(response.data.resultCode === 0) dispatch(getProfile(state.auth.id))
    else {dispatch(stopSubmit('profileData', {_error: response.data.messages[0]}))
        return Promise.reject()
    }
}
export const saveMainPhoto = (photo) => async (dispatch) => {
    debugger
    let response = await ProfileAPI.saveMainPhoto(photo)

    if(response.data.resultCode === 0) dispatch(saveMainPhotoSuccess(response.data.data.photos))

}


export default reducerProfile