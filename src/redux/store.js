import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi, how are you?" },
                { id: 1, message: "It's my first post" },
            ],
            newPostText: ""
        },

        dialogsPage: {
            dialogsData: [
                { id: 1, name: "Vlad" },
                { id: 2, name: "Dima" },
                { id: 3, name: "Roma" },
                { id: 4, name: "Ivan" },
                { id: 5, name: "Denis" },
            ],

            messageData: [
                { id: 1, message: "Hi, what's your name?" },
                { id: 2, message: "My name is Vlad." },
                { id: 3, message: "Ok." }
            ],

            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)

        this._callSubscriber(this._state)
    }


}

export default store;

window.store = store;