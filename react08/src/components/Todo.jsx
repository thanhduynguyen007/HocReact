import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoSlice, fetchTodos } from "../redux/slices/todoSlice";
const { addTodo } = todoSlice.actions;
const Todo = () => {
  const [name, setName] = useState("");
  const data = useSelector((state) => state.todo.todoList);
  const data2 = useSelector((state) => state.todo.todoList2);
  const status = useSelector((state) => state.todo.status);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Vui lòng nhập thông tin");
      return;
    }

    dispatch(addTodo(name));

    setName("");
  };
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);
  if (status === "error") {
    return `<h1>Đã có lỗi xảy ra</h1>`;
  }
  return (
    <div>
      <ul>
        {data.map((item, index) => (
          <h2 key={index}> {item}</h2>
        ))}
      </ul>
      {status === "pending" ? (
        <h3>Loading...</h3>
      ) : (
        data2.map(({ id, todo }) => <h2 key={id}>{todo}</h2>)
      )}
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên công việc..."
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
        />
      </form>
    </div>
  );
};

export default Todo;
