import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// // console.log("Hello");
const rootEl = document.querySelector("#root");
// // // tạo react element
// // const h1 = React.createElement(
// //   "h1",
// //   {
// //     id: "title",
// //   },
// //   "Học React Không khó",
// // );
// // const h2 = React.createElement(
// //   "h2",
// //   {
// //     id: "title2",
// //   },
// //   "Học JS Không khó",
// // );
// // const button = React.createElement(
// //   "button",
// //   {
// //     className: "btn",
// //     onClick: (e) => {
// //       alert("Đã Click");
// //       e.target.style.background = "red";
// //     },
// //   },
// //   "Click me",
// // );
// // const h3 = [...Array(40).keys()].map((index) =>
// //   React.createElement("h3", {}, `Item : ${index + 1}`),
// // );
// // const div = React.createElement(
// //   "div",
// //   {
// //     id: "content",
// //     className: "content",
// //     "data-index": "huhu",
// //   },
// //   h1,
// //   h2,
// //   button,
// //   ...h3,
// // );
// const div = (
//   <div className="content">
//     <h1>Hello</h1>
//     <h3>item 1</h3>
//     <h3>item 2</h3>
//     <h3>item 3</h3>
//     <h3>item 4</h3>
//     <h3>item 5</h3>
//     <h3>item 6</h3>
//     <h3>item 7</h3>
//     <h3>item 8</h3>
//     <h3>item 9</h3>
//     <h3>item 10</h3>
//     <button
//       className="btn"
//       onClick={() => {
//         console.log("Hello");
//       }}
//     >
//       Xin chào
//     </button>
//   </div>
// );
// // ReactDOM.createRoot(rootEl).render(div);
// //component
// /* Hàm hoặc class viết hoa chữ đầu */
// const ProductItem = () => {
//   return <h2>Chi tiết sản phẩm</h2>;
// };
// const Product = () => {
//   return (
//     <>
//       <h1>Danh sách sản phẩm</h1>
//       <ProductItem />
//       <ProductItem />
//       <ProductItem />
//       <ProductItem />
//     </>
//   );
// };
//Render UI
ReactDOM.createRoot(rootEl).render(<App />);
