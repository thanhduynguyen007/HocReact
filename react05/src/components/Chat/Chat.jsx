import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ChatMassage from "./ChatMassage";
import ChatForm from "./ChatForm";
import "./Chat.css";
const Chat = () => {
  return (
    <div className="container py-3">
      <div className="row justify-content-center">
        <div className="col-7">
          <div className="p-2 chat-box">
            <ChatMassage />
            <ChatForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
