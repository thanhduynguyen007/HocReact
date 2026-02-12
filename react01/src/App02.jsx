import React from "react";
import User from "./components/User";
import Image from "./components/Image";
import Posts from "./components/Posts";

export default function App() {
  const users = [
    {
      id: 1,
      name: "User 1",
      email: "user1@gmail.com",
      image:
        "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
    {
      id: 2,
      name: "User 2",
      email: "user2@gmail.com",
      image:
        "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
    {
      id: 3,
      name: "User 3",
      email: "user3@gmail.com",
      image:
        "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
    },
  ];
  const handleGetData = (value) => {
    console.log(value);
  };

  return (
    <div>
      <h2>Thông tin user</h2>
      {/* {users.map((user) => (
        <React.Fragment key={user.id}>
          <User {...user}>
            <Image src={user.image} width="200" height="200" />
          </User>
          <hr />
        </React.Fragment>
      ))} */}
      <Posts onGetData={handleGetData} />
    </div>
  );
}
/* 
    Props
    Truyền dữ liệu từ component cha --> component con
    Props sẽ nhận ở tham số của hàm, class
    Props chỉ truyền từ cha sang con
    Props không thể thay đổi chính nó
*/
