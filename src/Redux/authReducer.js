import {AuthAPI, UserAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'SET_AUTH_DATA';

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


export const getAutData = () => (dispatch) => {
    return AuthAPI.authUser().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data
                dispatch(setAuthData(id, login, email, true))
            }
        })
}
export const sendLoginData = (dataForm) => (dispatch) => {

    let {email, password, rememberMe} = {...dataForm}
    AuthAPI.authLogin(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAutData())
            } else dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
        })
}
export const Logout = () => (dispatch) => {

    AuthAPI.Logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false))
            }
        })
}


export default authReducer