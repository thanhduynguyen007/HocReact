import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const handleClickNoParameter = () => {
    alert("Đã Click");
  };
  const handleClickParameter = (text) => {
    alert("Đã click vào" + text);
  };
  const isLogin = true;

  const users = [
    {
      id: 1,
      name: "User 1",
    },
    {
      id: 2,
      name: "User 2",
    },
    {
      id: 3,
      name: "User 3",
    },
  ];
  return (
    <div>
      <Header />
      <h1 style={{ color: "red", fontWeight: "bold" }}>Học React heheheh</h1>
      {/* {isLogin ? (
        <h1>Chào mừng banjk quay trởi lại</h1>
      ) : (
        <h1>Vui lòng đăng nhập để tiếp tục</h1>
      )} */}
      {isLogin && <h1>Chào mừng banjk quay trởi lại</h1>}
      {/* // nếu phía trước đúng thì thực hiện các cái sau */}
      {users.map((item) => (
        <h1 key={item.id}>{item.id}</h1>
      ))}
      <Footer />
      <button onClick={handleClickNoParameter}>Click NoParameter</button>
      <button
        onClick={() => {
          handleClickParameter("Chào");
        }}
      >
        Click Parameter
      </button>
    </div>
  );
}
