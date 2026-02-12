import React, { Component } from "react";

export class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.message = "";
    console.log("1. Contructor");
  }
  componentDidMount() {
    console.log(
      "3. ComponentDidMount chạy ngay sau hàm render đầu tiên và chạy 1 lần duy nhất",
    );
  }
  componentDidUpdate() {
    console.log("4. ComponentDidUpdate chạy khi render chạy lần thứ 2 trở đi");
  }
  componentWillUnmount() {
    console.log("5. componentWillUnmount component bị xoá khỏidom");
  }
  render() {
    console.log("2. Render khi state thay đổi thì render chạy lại ");
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Click me
        </button>
      </div>
    );
  }
}

export default Counter;
