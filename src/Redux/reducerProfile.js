const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

let initialState = {
    posts: [
        {id: 0, message: 'How you like games?', likecounts: '10'},
        {id: 1, message: 'My post', likecounts: '15'},
        {id: 1, message: 'My post', likecounts: '20'},
    ],
    newtext: ''
}
const reducerProfile = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newtext,
                likecounts: 0
            }
            return {
                ...state,
                posts : [...state.posts, newPost],
                newtext : ''
            }
        }
        case UPDATE_TEXT_POST: {
            return {
                ...state,
                newtext : action.newtext
            }
        }
        default :
            return state

    }
}

export const addPostCreateAction = () => ({type: ADD_POST})
export const updateTextPostCreateAction = (text) => ({type: UPDATE_TEXT_POST, newtext: text})


export default reducerProfile