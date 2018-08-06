import React from "react";

export const hasProps = injectedProps => WrappedComponent => {
  const HasProps = props => <WrappedComponent {...injectedProps} {...props} />;

  return HasProps;
};

export const hasCondition = (
  test,
  ComponentOnPass,
  ComponentOnFail
) => props => {
  console.log(props);
  console.log(test(props));

  return test(props) ? (
    <ComponentOnPass {...props} />
  ) : ComponentOnFail ? (
    <ComponentOnFail {...props} />
  ) : null;
};

export const branch = (test, ComponentOnPass, ComponentOnFail) => props =>
  test ? (
    <ComponentOnPass {...props} />
  ) : ComponentOnFail ? (
    <ComponentOnFail {...props} />
  ) : null;
