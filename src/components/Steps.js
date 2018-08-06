import React from "react";

function Steps({ stage, handleClick, handlePrevious, children }) {
  return (
    <div>
      {children}
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
