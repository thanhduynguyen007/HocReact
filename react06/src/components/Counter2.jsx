import React, { useCallback, useState } from "react";
import Content from "./Content";

const Counter2 = () => {
  const [count, setCount] = useState(0);
  const handleReset = useCallback(() => {
    setCount(0);
  }, []);

  return (
    <div>
      <h2>Count: {count} </h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Content onReset={handleReset} />
    </div>
  );
};

export default Counter2;
