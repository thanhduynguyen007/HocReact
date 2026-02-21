import React, { useState } from "react";
import { useDispatch } from "../../store/hook";

const ChatForm = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "chat/sendMessages",
      payload: message,
    });
    setMessage("");
  };
  return (
    <form
      action=""
      className="input-group input-group-sm"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="form-control"
        name="message"
        placeholder="Tin nhắn..."
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        value={message}
      />
      <button className="btn btn-primary">Gửi</button>
    </form>
  );
};

export default ChatForm;
