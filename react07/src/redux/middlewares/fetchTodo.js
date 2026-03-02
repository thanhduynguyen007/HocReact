import { fetchTodos } from "../actions/todoActions";

//Redux-thunk middlewares 
export const fetchTodo = () => {
    // eslint-disable-next-line no-unused-vars
    return async (dispatch, getState) => {
        /* 
         Xử lí logic
         Fetch API
         Lưu log
         Thay đổi state trước khi đẩy lên reducer
         --> Gọi hàm dispatch
        */
        // console.log("Hello");
        // console.log(getState()); // lấy ra tất cả các state của store
        const response = await fetch(`https://dummyjson.com/todos`);
        const data = await response.json();
        // console.log(data);
        dispatch(fetchTodos(data.todos))

    }
}
