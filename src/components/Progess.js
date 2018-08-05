import React from "react";

function Progress({ children, stage }) {
  const transformChildren = React.Children.map(children, child =>
    React.cloneElement(child, { stage })
  );
  return <div>{transformChildren}</div>;
}

export default Progress;
