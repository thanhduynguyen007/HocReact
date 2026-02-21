import React, { useReducer } from "react";

const Counters = () => {
  const intialState = {
    count: 0,
    todo: [],
    input: "",
  };
  const reducer = (state, action = {}) => {
    switch (action.type) {
      case "counter/increment":
        return {
          ...state,
          count: state.count + action.payload,
        };
      case "counter/decrement":
        return {
          ...state,
          count: state.count - action.payload,
        };
      case "todo/add":
        return {
          ...state,
          todo: [...state.todo, action.payload],
          input: "",
        };

      case "input/change":
        return {
          ...state,
          input: action.payload,
        };
      default:
        return state;
    }
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 1,
    });
  };
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 1,
    });
  };
  const handleChange = (e) => {
    dispatch({
      type: "input/change",
      payload: e.target.value,
    });
  };
  const handleSubmitTodo = () => {
    dispatch({
      type: "todo/add",
      payload: state.input,
    });
  };

  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <hr />
      {state.todo.length ? (
        state.todo.map((item, index) => <h1 key={index}>{item}</h1>)
      ) : (
        <p>Chưa có dữ liêu</p>
      )}
      <input
        type="text"
        placeholder="Write something..."
        onChange={handleChange}
        value={state.input}
      />
      <button onClick={handleSubmitTodo}>Thêm</button>
    </div>
  );
};

export default Counters;
