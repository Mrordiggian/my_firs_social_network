const SEND_MESSAGE = 'SEND-MESSAGE';
let initialState = {
    messages: [
        {id: 0, message: 'What is your name', send: 'send'},
        {id: 1, message: 'Please, tell me about you', send: 'send'},
        {id: 2, message: 'What  do you do?', send: 'receive'},
        {id: 3, message: 'Today I play in Dota 2', send: 'send'},
        {id: 4, message: 'How much do you playing in dota 2?', send: 'receive'},
    ],
    dialogs: [
        {id: 0, name: 'Dima', ava: 'https://sun9-10.userapi.com/c638320/v638320921/504bc/A-GirlzJ1VA.jpg'},
        {id: 1, name: 'Pasha', ava: 'https://sun9-1.userapi.com/c855416/v855416468/cb450/6knywvCs0Us.jpg?ava=1'},
        {id: 2, name: 'Roma', ava: 'https://sun9-21.userapi.com/c855328/v855328105/d08c/SD6Kt0_ewQ4.jpg?ava=1'},
        {id: 3, name: 'Sasha', ava: 'https://sun9-62.userapi.com/c850020/v850020647/2a8d2/WZv-RMVWys0.jpg?ava=1'},
        {id: 4, name: 'Lesha', ava: 'https://vk.com/images/camera_200.png?ava=1'},
    ]
}

const reducerMessage = (state = initialState, action) =>{
    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {id: 5,
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