import React from "react";

function Stage({ stage, num }) {
  if (stage === num) {
    return <div>Currently on that stage</div>;
  }

  return <div>Stage {num}</div>;
}

export default Stage;
