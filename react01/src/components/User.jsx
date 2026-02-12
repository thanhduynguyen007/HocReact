import React from "react";

export default function User({ name, email, children }) {
  // console.log(props);
  // name = "Không sửa đc";
  // không sửa được
  return (
    <div>
      {children}
      <h3>Tên: {name}</h3>
      <h3>Email: {email}</h3>
    </div>
  );
}
