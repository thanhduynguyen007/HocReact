
export const initialState = {
    message: "Hello Thanh Duy",
    chatMessages: []
}
export const rootReducer = (state, action) => {
    switch (action.type) {
        case "message/update":
            return {
                ...state,
                message: action.payload,
            }
        case "chat/sendMessage":
            return {
                ...state,
                chatMessages: [...state.chatMessages, action.payload]
            }
        case "chat/fetchMessage":
            return {
                ...state,
                chatMessages: action.payload
            }
        default:
            return state;
    }
}
