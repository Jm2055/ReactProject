import React from "react";
class Class_Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            title: "hello",
        };
    }
    buttonPressed() {
        this.setState({
            count: this.state.count + 1,
        });
    }

  render() {
    return (
    <div>
        <p>Count: {this.state.count}</p>
        <button onClick={() => this.buttonPressed()}>Click Me!</button>
    </div>
    );
  }
}

export default Class_Info;
