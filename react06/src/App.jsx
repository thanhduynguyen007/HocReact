import React from "react";
import Counter from "./components/Counter";
import ImageBox from "./components/ImageBox/ImageBox";
import Input from "./components/Input";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <ImageBox /> */}
      <Input label="Họ tên" />
      <Input label="Email" type="email" />
      <Input label="tuổi" type="number" />
    </div>
  );
};

export default App;
