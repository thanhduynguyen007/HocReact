import React from "react";
import { useReducer } from "react";
import { reducer } from "../reducer/reducer";
export default function Counter() {
  //   const reducer = (prevState, action = {}) => {
  //     switch (action.type) {
  //       case "counter/increment":
  //         return {
  //           ...prevState,
  //           count: prevState.count + action.payload,
  //         };
  //       case "counter/decrement":
  //         return {
  //           ...prevState,
  //           count: prevState.count - action.payload,
  //         };
  //       default:
  //         return prevState;
  //     }
  //   };
  const initialState = {
    count: 0,
    todo: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  const handleIncrement = () => {
    dispatch({
      type: "counter/increment", // tên feature/ten action
      payload: 1, // mỗi lần công lên 1
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement", // tên feature/ten action
      payload: 2, // mỗi lần trừ 2
    });
  };
  console.log("Re-render");

  return (
    <div>
      <h1>Count: {state.count} </h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
