import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Stepper from "./components/Stepper";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Stepper stage={1}>
          <Stepper.Progress>
            <Stepper.Stage num={1} />
            <Stepper.Stage num={2} />
            <Stepper.Stage num={3} />
            <Stepper.Stage num={4} />
          </Stepper.Progress>
          <Stepper.Steps>
            <Stepper.Step num={1} text={"Stage 1"} />
            <Stepper.Step num={2} text={"Stage 2"} />
            <Stepper.Step num={3} text={"Stage 3"} />
            <Stepper.Step num={4} text={"Stage 4"} />
          </Stepper.Steps>
        </Stepper>
      </div>
    );
  }
}

export default App;
