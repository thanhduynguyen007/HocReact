import React, { useEffect } from "react";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodo } from "./redux/middlewares/fetchTodo";
import { fetchTodos } from "./redux/actions/todoActions";

const App = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  console.log("hello", todoList);

  useEffect(() => {
    dispatch(fetchTodo());
  }, []);

  return (
    <div>
      <Counter />
      <h3>Todo List</h3>
      <button
        onClick={() => {
          dispatch(fetchTodos());
        }}
      >
        Xoá todo
      </button>
      {todoList.map(({ id, todo }) => (
        <h3 key={id}>{todo}</h3>
      ))}
    </div>
  );
};

export default App;
