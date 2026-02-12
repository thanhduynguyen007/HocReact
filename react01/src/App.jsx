import React, { Component } from "react";
import Counter from "./components/Counter";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      <div>
        {this.state.show && <Counter />}
        <hr />
        <button
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Toggle
        </button>
      </div>
    );
  }
}

export default App;
