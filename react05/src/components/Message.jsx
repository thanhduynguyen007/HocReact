import { useDispatch, useSelector } from "../store/hook";

const Message = () => {
  // const { state, dispatch } = useContext(ProviderContext);
  // const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const state = useSelector();
  const handleSendMessage = () => {
    dispatch({
      type: "message/update",
      // payload: inputValue,
      payload: "Thanh Duy Dang cap",
    });
  };
  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // // cách 2
  // const handleChange = (e) => {
  //   dispatch({
  //     type: "message/update",
  //     payload: e.target.value,
  //   });
  // };
  return (
    <div>
      <h2>{state.message}</h2>
      {/* <input
        type="text"
        name="message"
        placeholder="Nhập tin nhắn..."
        // onChange={handleChange}
      /> */}
      <button onClick={handleSendMessage}>Gửi</button>
    </div>
  );
};

export default Message;
