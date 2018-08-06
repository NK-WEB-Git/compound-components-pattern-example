import React from "react";

const withLoading = Component => {
  const WithLoading = ({ isLoading, ...props }) => {
    if (!isLoading) {
      return <Component {...props} />;
    }

    return <p>Loading....</p>;
  };

  return WithLoading;
};

export default withLoading;
