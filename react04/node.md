# Hook useReducer

- useState -> Logic nằm trong eventHandler, callApi,... --> Xử lí trong component
  ==> Tách logic update state thành reducer (Ôn tập hàm reduce)

  ==> Dùng để quản lí state phức tạp

```js
const reducer = (state, current) => {
  //Xử lí logic update state --> return về state mới
};
const [state, dispatch] = useReducer(reducer, initialState);
```

dispatch là gì?

- dispatch là một hàm (Khá giống vối setState ở useState)
- Khi hàm dispatch được gọi thì đẩy dữ liệu lên reducer (tham số current) dựa vào tham số current để update cái state
- dispatch sẽ nhận vào 1 đối số gọi là Action

Action là gì?

- Action là 1 object
- Action mô tả hành động

```js
  {
  type: "Ten Action",
  payload: "dữ liệu muốn gửi lên reducer"
  }
```
