import React, { useState } from "react";
import Photo from "./components/Photo";
import Todos from "./components/Todos";
import Usd from "./components/Usd";

const App = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1>UseEffect Hook</h1>
      {/* <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle
      </button>
      <hr />
      {show && <Photo />} */}

      {/* <Todos /> */}
      <Usd />
    </div>
  );
};

export default App;
