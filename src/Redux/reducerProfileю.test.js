import {ProfileAPI, UserAPI} from "../api/api";
import ReactDOM from "react-dom";
import App from "../App";
import reducerProfile, {addPost, deletePost} from "./reducerProfile";




let state = {
    posts: [
        {id: 0, message: 'My post', likecounts: '10'},
        {id: 1, message: 'My post', likecounts: '15'},
        {id: 2, message: 'My post', likecounts: '20'},
    ],
    profileInfo: null,
    status: null
}

it('length after added new post should will be 4', () => {
    let action = addPost('Hello gays')
    let newState = reducerProfile (state, action)
    expect(newState.posts.length).toBe(4)
});

it('length after delete post should will be 2', () => {
    let action = deletePost(1)
    let newState = reducerProfile (state, action)
    expect(newState.posts.length).toBe(2)
});






