import React from "react";

const Weatherweather = (props) => {
  return (
    <div className="centered">
      <div>Conditions: {props.description}</div>
    </div>
  );
};

export default Weatherweather;
