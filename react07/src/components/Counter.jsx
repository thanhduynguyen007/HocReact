import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/counterActions";

const Counter = () => {
  //lấy state từ store
  const count = useSelector((state) => {
    console.log(state);

    return state.counter.count;
  });
  //Gọi hàm dispatch
  console.log(count);

  const dispatch = useDispatch();
  return (
    <div>
      <h2>Count: {count} </h2>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
