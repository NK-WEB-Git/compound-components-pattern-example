import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Stepper from "./components/Stepper";
import withLoading from "./HOC/withLoading";
import List from "./components/List";

const ListWithLoading = withLoading(List);

class App extends Component {
  state = {
    loading: false,
    repos: null
  };

  componentDidMount() {
    // this.setState({ loading: true });
    // setTimeout(() => {
    //   fetch("https://api.github.com/users/YOUR-USERNAME/repos")
    //     .then(json => json.json())
    //     .then(repos => this.setState({ loading: false, repos }));
    // }, 5000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ListWithLoading
          repos={this.state.repos}
          isLoading={this.state.loading}
        />
        <Stepper
          stage={1}
          render={(stage, handleClick, handlePrevious) => (
            <React.Fragment>
              <Stepper.Progress>
                <Stepper.Stage stage={stage} num={1} />
                <Stepper.Stage stage={stage} num={2} />
                <Stepper.Stage stage={stage} num={3} />
                <Stepper.Stage stage={stage} num={4} />
              </Stepper.Progress>
              <Stepper.Steps
                stage={stage}
                handleClick={handleClick}
                handlePrevious={handlePrevious}
              >
                <Stepper.Step stage={stage} num={1} text={"Stage 1"} />
                <Stepper.Step stage={stage} num={2} text={"Stage 2"} />
                <Stepper.Step stage={stage} num={3} text={"Stage 3"} />
                <Stepper.Step stage={stage} num={4} text={"Stage 4"} />
              </Stepper.Steps>
            </React.Fragment>
          )}
        />
      </div>
    );
  }
}

export default App;
