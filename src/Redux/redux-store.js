import {combineReducers, createStore} from "redux";
import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerSidebar from "./reducerSidebar";
import reducerUser from "./reducerUsers";

let reducers = combineReducers({
    ProfilePage: reducerProfile,
    MessagePage: reducerMessage,
    Sidebar: reducerSidebar,
    FindFriends: reducerUser
})
let store = createStore(reducers)

export default store