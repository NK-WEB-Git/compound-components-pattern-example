import React from "react";
import { number } from "prop-types";

import Progress from "./Progess";
import Stage from "./Stage";
import Steps from "./Steps";
import Step from "./Step";
import { branch, hasCondition } from "../HOC/hasProps";

const StageWithNull = hasCondition(({ stage, num }) => stage === num, Step);

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
  static Step = StageWithNull;

  handleClick = () => {
    this.setState(prevState => ({ stage: prevState.stage + 1 }));
  };

  handlePrevious = () => {
    this.setState(prevState => ({ stage: prevState.stage - 1 }));
  };

  render() {
    const { stage } = this.state;
    return (
      <div>
        {this.props.render(stage, this.handleClick, this.handlePrevious)}
      </div>
    );
  }
}

export default Stepper;
