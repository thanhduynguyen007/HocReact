import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Content from "./Content";
import { color } from "../libs/color";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  console.log(countRef);
  const inputRef = useRef();
  const buttonRef = useRef();
  // useEffect(() => {
  //   // console.log(inputRef);
  //   // inputRef.current.focus();
  //   // console.log(buttonRef);
  // }, []);
  useLayoutEffect(() => {
    // Không bị nháy khi count = 5
    if (count === 5) setCount(0);
  }, [count]);
  return (
    <div>
      <input type="text" ref={inputRef} placeholder="Nhập gì đó..." />
      <Button ref={buttonRef} /> /
      {/* react ko cho đặ tên props là ref nếu đặt
      phải dùng forwardRef */}
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Tăng
      </button>
      <Content />
    </div>
  );
};

export default color(Counter); // nó sẽ chạy vào color trước

/* 
    useRef();
     Khi ref bị thay đổi thì component sẽ không bị re - render
    Thay đổi dữ liệu ngay sau khi cập nhật
    Có thể tham chiếu tới 1 element của react để trả về 1 dom element

    useEffect(); update ui rồi mới làm logic
    1. State thay đổi
    2. Re-Render
    3. Ui update
    4. CleanUp
    5. CallBạckj

    useLayoutEffect(); chờ logci rồi mới update ui
    1. State thay đổi
    2. Re-Render
    3. CleanUp
    4. CallBạckj
    5. Ui update
*/
