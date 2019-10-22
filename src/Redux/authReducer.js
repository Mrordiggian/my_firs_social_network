import {AuthAPI, UserAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'auth_SET_AUTH_DATA';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthData: false

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA: {
            return {...state, ...action.data}
        }
        default :
            return state
    }
}

export const setAuthData = (id, login, email, isAuthData) => ({
    type: SET_AUTH_DATA,
    data: {id, login, email, isAuthData}
})


export const getAuthData = () => async (dispatch) => {
    let data = await AuthAPI.authUser()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthData(id, login, email, true))
    }

}
export const sendLoginData = (dataForm) => async (dispatch) => {
    let {email, password, rememberMe} = {...dataForm}
    let response = await AuthAPI.authLogin(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthData())
    } else dispatch(stopSubmit('login', {_error: response.data.messages[0]}))

}
export const Logout = () => async (dispatch) => {
    let response = await AuthAPI.Logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }

}


export default authReducer