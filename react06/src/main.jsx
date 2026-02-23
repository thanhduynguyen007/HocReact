import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.getElementById("root"), {
  identifierPrefix: "thanhduy_", // đặt thêm khi muốn sử dụng useId khi thêm nhiều số
}).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
