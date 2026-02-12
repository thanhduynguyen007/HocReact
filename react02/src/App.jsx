import React from "react";
import Counter from "./components/Counter";
import Login from "./components/Login";

export default function App() {
  return (
    <div>
      <Counter />
      {/* <Login /> */}
    </div>
  );
}

/* 
  Functional Component --> Chỉ có props
  ==> React Hook để làm việc với các thành phần không có sẵn trong Functional

  -Function đặc biệt do react build sẵn hoặc do lập trình viên tự cài
  - Chỉ được phép gọi ở cấp đầu tiên trong functional component
  - Bắt đầu bằng chữ use
*/
