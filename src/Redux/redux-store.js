import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerSidebar from "./reducerSidebar";
import reducerUser from "./reducerUsers";
import authReducer from "./authReducer";
import commonReducer from "./commonReducer";
import ThunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    ProfilePage: reducerProfile,
    MessagePage: reducerMessage,
    Sidebar: reducerSidebar,
    FindFriends: reducerUser,
    auth: authReducer,
    common: commonReducer
})
let store = createStore(reducers, applyMiddleware(ThunkMiddleware))



export default store