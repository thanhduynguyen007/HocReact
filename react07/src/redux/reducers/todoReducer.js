const initState = {
    todoList: []
}
export const todoReducer = (state = initState, action) => {
    switch (action.type) {
        case "todo/fetch":
            return {
                ...state, todoList: action.payload
            }
        default: {
            return state
        }

    }
}