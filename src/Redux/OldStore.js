import reducerProfile from "./reducerProfile";
import reducerMessage from "./reducerMessage";
import reducerSidebar from "./reducerSidebar";

let oldStore = {
    _state: {
        ProfilePage: {
            posts: [
                {id: 0, message: 'How you like games?', likecounts: '10'},
                {id: 1, message: 'My post', likecounts: '15'},
                {id: 1, message: 'My post', likecounts: '20'},
            ],
            newtext: ''
        },
        MessagePage: {
            messages: [
                {id: 0, message: 'What is your name', send: 'send'},
                {id: 1, message: 'Please, tell me about you', send: 'send'},
                {id: 2, message: 'What  do you do?', send: 'receive'},
                {id: 3, message: 'Today I play in Dota 2', send: 'send'},
                {id: 4, message: 'How much do you playing in dota 2?', send: 'receive'},
            ],
            newtextMessage: '',
            dialogs: [
                {id: 0, name: 'Dima', ava: 'https://sun9-10.userapi.com/c638320/v638320921/504bc/A-GirlzJ1VA.jpg'},
                {id: 1, name: 'Pasha', ava: 'https://sun9-1.userapi.com/c855416/v855416468/cb450/6knywvCs0Us.jpg?ava=1'},
                {id: 2, name: 'Roma', ava: 'https://sun9-21.userapi.com/c855328/v855328105/d08c/SD6Kt0_ewQ4.jpg?ava=1'},
                {id: 3, name: 'Sasha', ava: 'https://sun9-62.userapi.com/c850020/v850020647/2a8d2/WZv-RMVWys0.jpg?ava=1'},
                {id: 4, name: 'Lesha', ava: 'https://vk.com/images/camera_200.png?ava=1'},
            ]
        },
        Sidebar: [
            {id: 0, name: 'Dima', ava: 'https://sun9-10.userapi.com/c638320/v638320921/504bc/A-GirlzJ1VA.jpg'},
            {id: 1, name: 'Pasha', ava: 'https://sun9-1.userapi.com/c855416/v855416468/cb450/6knywvCs0Us.jpg?ava=1'},
            {id: 2, name: 'Roma', ava: 'https://sun9-21.userapi.com/c855328/v855328105/d08c/SD6Kt0_ewQ4.jpg?ava=1'},
            {id: 3, name: 'Sasha', ava: 'https://sun9-62.userapi.com/c850020/v850020647/2a8d2/WZv-RMVWys0.jpg?ava=1'},
            {id: 4, name: 'Lesha', ava: 'https://sun9-52.userapi.com/c850636/v850636473/1bdb7d/c1hS4dFeSR8.jpg?ava=1'},
        ]
    },

    _callSubscriber (){
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch (action) {
        this._state.ProfilePage = reducerProfile(this._state.ProfilePage, action)
        this._state.MessagePage = reducerMessage(this._state.MessagePage, action)
        this._state.Sidebar = reducerSidebar(this._state.Sidebar, action)
        this._callSubscriber(this._state)
    },

}

export default oldStore

