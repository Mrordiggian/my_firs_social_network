import {getAutData} from "./authReducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

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


export const initializeApp = () => (dispatch) =>{
    let promise = dispatch(getAutData())
    Promise.all([promise]).then(()=> dispatch(initialized_success()))
}



export default appReducer