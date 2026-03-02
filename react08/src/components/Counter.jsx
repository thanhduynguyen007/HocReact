import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../redux/slices/counterSlice";
const { increment, decrement } = counterSlice.actions;
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return (
    <div>
      <h2>Counter: {count} </h2>
      <button
        onClick={() => {
          dispatch(decrement(1));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch(increment(1));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
