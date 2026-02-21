import { useEffect } from "react";
import { useDispatch, useSelector } from "../../store/hook";

const ChatMassage = () => {
  const { chatMessages } = useSelector();
  const dispatch = useDispatch();
  useEffect(() => {
    const data = localStorage.getItem("chat_messages");
    if (data) {
      dispatch({
        type: "chat/fetchMessages",
        payload: JSON.parse(data),
      });
    }
  }, []);

  useEffect(() => {
    if (chatMessages.length) {
      localStorage.setItem("chat_messages", JSON.stringify(chatMessages));
    }
  }, [chatMessages]);
  // useEffect(() => {
  //   const handleStorage = (e) => {
  //     if (e.key === "chat_messages") {
  //       dispatch({
  //         type: "chat/fetchMessages",
  //         payload: JSON.parse(e.newValue),
  //       });
  //     }
  //   };

  //   window.addEventListener("storage", handleStorage);

  //   return () => window.removeEventListener("storage", handleStorage);
  // }, []);
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
