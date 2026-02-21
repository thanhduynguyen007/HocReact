import React, { useEffect, useState } from "react";
import { useSelector } from "../../store/hook";

const ChatMassage = () => {
  const { chatMessages } = useSelector();
  //Tạo state nội bộ và lưu giá trị localStorage và lưu lại
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("chat_messages")) {
      const messageData = JSON.parse(localStorage.getItem("chat_messages"));
      setMessages(messageData);
    }
    if (chatMessages.length) {
      localStorage.setItem("chat_messages", JSON.stringify(chatMessages)); // lưu kiểu này nếu như load lại trang thì state sẽ lưu lại mảng rỗng: load trang ==> state set lại "" ==> localStorage lưu state = ""
    }
  }, [chatMessages]);
  return (
    <div className="chat-message">
      {chatMessages.map((item, index) => (
        <div className="mb-3 message-item" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default ChatMassage;
