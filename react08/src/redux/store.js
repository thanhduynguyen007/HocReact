import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slices/counterSlice.js"
import { todoSlice } from "./slices/todoSlice.js";
export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        todo: todoSlice.reducer
    }
})