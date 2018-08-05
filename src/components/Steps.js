import React from "react";

function Steps({ stage, handleClick, handlePrevious, children }) {
  const transformChildren = React.Children.map(children, child => {
    return stage === child.props.num && child;
  });

  return (
    <div>
      {transformChildren}
      <button disabled={stage === 4} onClick={handleClick}>
        Next stage
      </button>
      <button disabled={stage <= 1} onClick={handlePrevious}>
        Previous stage
      </button>
    </div>
  );
}

export default Steps;
