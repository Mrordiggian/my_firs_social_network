import {AuthAPI, SecurityAPI, UserAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_DATA = 'auth_SET_AUTH_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'auth_SGET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuthData: false,
    captchaUrl: null

}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_DATA:
        case GET_CAPTCHA_URL_SUCCESS: {
            return {...state, ...action.data}
        }
        default :
            return state
    }
}

const setAuthData = (id, login, email, isAuthData) => ({
    type: SET_AUTH_DATA,
    data: {id, login, email, isAuthData}
})
const getCaptchaSuccess = (captchaUrl) => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    data: {captchaUrl}
})


export const getAuthData = () => async (dispatch) => {
    let data = await AuthAPI.authUser()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data
        dispatch(setAuthData(id, login, email, true))
    }

}
export const sendLoginData = (dataForm) => async (dispatch) => {
    let {email, password, rememberMe, captcha} = {...dataForm}
    let response = await AuthAPI.authLogin(email, password, rememberMe, captcha)
    if (response.data.resultCode === 0) {
        dispatch(getAuthData())
    } else {
        if(response.data.resultCode === 10) {
            dispatch(getCaptcha())
        }
        dispatch(stopSubmit('login', {_error: response.data.messages[0]}))
    }

}
export const Logout = () => async (dispatch) => {
    let response = await AuthAPI.Logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthData(null, null, null, false))
    }

}
const getCaptcha = () => async (dispatch) => {
    let response = await SecurityAPI.getCaptcha()
    dispatch(getCaptchaSuccess(response.data.url))

}


export default authReducer