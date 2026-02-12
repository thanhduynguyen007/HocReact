/* State lifecycle  --> Học bằng class component*/
import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handleDecrement}>-</button>
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default App;
/* 
    State là gì?
    - Lưu trạng thái nội bộ của component -->  thể hiện là dữ liệu
    - Trong 1 component --> state là một object --> Muốn lưu nhiều thông tin, tạo ra các thuộc tính trong object state
    - Bất kì 1 thuộc tính nào trong state thay đổi --> component sẽ bị re-render (cập nhật lại UI)
    - Khong thay đổi trược tiếp object state mà phải thông qua hàm
*/
