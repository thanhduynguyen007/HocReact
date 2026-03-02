import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
    todoList: [],
    todoList2: [],
    // status: "pending"
    status: "idle"
}
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload)
        },
        // updateTodo: (state, action) => {
        //     state.todoList2 = action.payload;
        // },
        // updateStatus: (state, action) => {
        //     state.status = "success";
        // }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTodos.pending, (state, action) => {
            state.status = "pending"
        });
        builder.addCase(fetchTodos.fulfilled, (state, action) => {
            state.todoList2 = action.payload
            state.status = "success"
        });
        builder.addCase(fetchTodos.rejected, (state, action) => {
            state.status = "error"
        })
    }
});

//Redux thunk 
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
    const response = await fetch(`https://dummyjson.com/todos`);
    const data = await response.json();
    return data.todos
})
//cách bình thường
// export const fetchTodos = () => {
//     // eslint-disable-next-line no-unused-vars
//     return async (dispatch, getState) => {
//         console.log("Fetch Todo");
//         const response = await fetch(`https://dummyjson.com/todos`);
//         const data = await response.json();
//         dispatch(todoSlice.actions.updateTodo(data.todos));
//         dispatch(todoSlice.actions.updateStatus());
//     }
// }