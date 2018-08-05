import React from "react";
import { number } from "prop-types";

import Progress from "./Progess";
import Stage from "./Stage";
import Steps from "./Steps";
import Step from "./Step";

class Stepper extends React.Component {
  state = {
    stage: this.props.stage
  };

  static propTypes = {
    stage: number
  };

  static defaultProps = {
    stage: 1
  };

  static Progress = Progress;
  static Steps = Steps;
  static Stage = Stage;
  static Step = Step;

  handleClick = () => {
    this.setState(prevState => ({ stage: prevState.stage + 1 }));
  };

  handlePrevious = () => {
    this.setState(prevState => ({ stage: prevState.stage - 1 }));
  };

  render() {
    const { stage } = this.state;
    const children = React.Children.map(this.props.children, child =>
      React.cloneElement(child, {
        stage,
        handleClick: this.handleClick,
        handlePrevious: this.handlePrevious
      })
    );
    return <div>{children}</div>;
  }
}

export default Stepper;
