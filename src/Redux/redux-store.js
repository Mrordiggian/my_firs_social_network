import {applyMiddleware, combineReducers, createStore} from "redux";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerSidebar from "./reducerSidebar";
import reducerUser from "./reducerUsers";
import authReducer from "./authReducer";
import commonReducer from "./commonReducer";
import ThunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'
import appReducer from "./appReducer";

let reducers = combineReducers({
    ProfilePage: reducerProfile,
    MessagePage: reducerMessage,
    Sidebar: reducerSidebar,
    FindFriends: reducerUser,
    auth: authReducer,
    common: commonReducer,
    app: appReducer,
    form: formReducer
})
let store = createStore(reducers, applyMiddleware(ThunkMiddleware))



export default store