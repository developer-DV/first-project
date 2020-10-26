const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messageData: [...state.messageData, { id: 4, message: action.newBodyMessage }],
            }
        default:
            return state
    }
}

export const addMessageActionCreator = (newBodyMessage) => ({type: SEND_MESSAGE, newBodyMessage})

export default dialogsReducer