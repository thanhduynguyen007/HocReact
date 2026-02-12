import React, { useEffect } from "react";

const Counter = () => {
  //   console.log(React.useState(0)); // trả về mảng
  const [count, setCount] = React.useState(0);
  console.log("Render lần", count);
  // Hàm chạy lại nhưng state ko khởi tạo lại từ đầu
  const handleIncrement = () => {
    // Không được tạo hook trong đây
    setCount((count) => count + 1);
    console.log("Tăng");
  };
  const handleDecrement = () => {
    setCount((count) => count - 1);
    console.log("Giam");
  };

  // useEffect(() => {
  //   console.log("Mounted");
  //   return () => {
  //     console.log("Cleanup"); unmount
  //   };
  // }, []);
  useEffect(() => {
    console.log("Chạy sau UI", count);
    return () => {
      console.log("Cleanup lần trước", count); // dọn dẹp
    };
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      {console.log("ui")}
    </div>
  );
};

export default Counter;
