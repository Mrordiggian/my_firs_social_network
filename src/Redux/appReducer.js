import {getAuthData} from "./authReducer";


const INITIALIZED_SUCCESS = 'app_INITIALIZED_SUCCESS';

let initialState = {
    initialized: false,

}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {...state, initialized : true}
        }
        default :
            return state
    }
}

const initialized_success = () => ({type: INITIALIZED_SUCCESS})


export const initializeApp = () => async (dispatch) =>{
    let promise = dispatch(getAuthData())
    await Promise.all([promise])
    dispatch(initialized_success())

}



export default appReducer