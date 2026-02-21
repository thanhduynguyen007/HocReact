Functional Component --> Chỉ có props
==> React Hook để làm việc với các thành phần không có sẵn trong Functional

- Function đặc biệt do react build sẵn hoặc do lập trình viên tự cài
- Chỉ được phép gọi ở cấp đầu tiên trong functional component
- Bắt đầu bằng chữ use

1. useState() --> Làm việc với state trong functional component

2. useEffect()

- Mô phỏng vòng đời component trong functional component
- Xử lí các công việc side effect
  Ví dụ
  State thay đổi --> re-render
  Tình tổng --> Side Effect --> chạy sau công việc chính

useEffect(callback, dependencies); không có giá trị trả về: undefined
Các trường hợp xảy ra

- dependencies --> null | undefined --> khi component re-render thì callback sẽ chạy
- dependencies --> [] --> callback chỉ chạy 1 lần sau khi component được mounted (re-render 1 lần);
- dependencies --> [a, b, c, ....] --> callback chỉ chạy lại khi 1 trong các biến được khai báo thay đổi
  callback trả về 1 function -> unmount, hay còn gọi là cleanup
  Lưu ý: clean up chỉ chạy từ lần 2 trở đi khi đc re-render lại
  Thứ tự chạy của useEffect

1. State thay đổi
2. Re-render
3. Cleanup (nếu có) --> cleanup của lần trước
4. Callback
