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
            return {...state,...action.data,isAuthData: true}
        }
        default :
            return state

    }
}

export const setAuthData = (id, login, email) => ({type: SET_AUTH_DATA, data: {id, login, email}})


export default authReducer