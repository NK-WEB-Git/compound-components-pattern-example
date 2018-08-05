import React from "react";

function Step({ title, num }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Stage n°{num}</p>
    </div>
  );
}

export default Step;
