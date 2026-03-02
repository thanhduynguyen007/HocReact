import { combineReducers, legacy_createStore as createStore, applyMiddleware } from "redux";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";
import { thunk } from "redux-thunk"
const rootReducer = combineReducers({
    counter: counterReducer,
    todo: todoReducer,
})
export const store = createStore(rootReducer,
    applyMiddleware(thunk)
);
//Kĩ thuật tách Reducer
//RootReducer
// -- counterReducer
// -- todoReducer
// ==> Gom các Reducer thành rootReducer bằng các sử dụng hàm combineReducers()

//Action Creator --> Gom action thành 1 hàm để tái sử dụng

