import React, { useEffect, useState } from "react";
// let count = 0; // chỉ re-render cái hàm còn mấy cái ngoài hàm ko liên quan
const Todos = () => {
  const [todo, setTodo] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodo([...todo, name]);
  };
  const handleChange = (e) => {
    setName(e.target.value);
  };
  useEffect(() => {
    setCount(todo.length); // cập nhật số lượng là một công việc thực hiện sau đó là side effect ( render trước mới cập nhật count giao diện trước mới thực hiện tính toán)
  }, [todo]);
  return (
    <div>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <hr />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name..."
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
      <h3>Có {count} công việc</h3>
    </div>
  );
};
export default Todos;
