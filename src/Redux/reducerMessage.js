const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    messages: [
        {id: 0, message: 'Hello', send: 'receive'},
    ],
    dialogs: [
        {id: 0, name: 'Kate', ava: 'https://img.rg.ru/img/content/164/59/36/1_d_850.jpeg'},
        {id: 1, name: 'Sasha', ava: 'http://cdn.ok-magazine.ru/files/presets/795_547/media_wysiwyg/16.3.2018_ok_cover40924__vid218897e.jpg'},
        {id: 2, name: 'Mila', ava: 'https://www.ivi.ru/titr/uploads/2018/08/14/9988d81a98e2d9826e2340a7af4a7f48.jpg/1400x0'},
        {id: 3, name: 'Megan', ava: 'https://pix-feed.com/wp-content/uploads/2018/04/maxresdefault-4.jpg'},
        {id: 4, name: 'Lesli', ava: 'https://cs.pikabu.ru/post_img/2013/04/21/10/1366556575_1547025030.jpg'},
    ]
}

const reducerMessage = (state = initialState, action) =>{
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: Date.now(),
                message: action.message,
                send: 'send'}

            return  {
                ...state,
                messages : [...state.messages, newMessage],
                newtextMessage : ''
            }
        default: return state
    }
}

export const sendMessage = (message) => ({type: SEND_MESSAGE, message})

export default reducerMessage