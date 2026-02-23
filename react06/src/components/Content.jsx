import React from "react";

const Content = () => {
  console.log("Content Re-Render");

  return (
    <div>
      <h2>This is a content</h2>
    </div>
  );
};

export default React.memo(Content); // không cho re render khi component cha re render
// HOC: Higher order component --> Component cấp cao hơn bọc component hiện táij

//React.memo(); giúp tránh re render, dựa vào sự thay đổi của props, vẫn bị re render nếu có 1 props truyền vào thay đổi

// Build HOC: color --> Thay đổi màu ngẫu nhiên của 1 component
// -Nhận vào 1 component
// Trả về 1 component mới --> Trả về component ban đầu
