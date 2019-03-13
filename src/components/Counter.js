import React from "react";

const Counter = props => {
  const { changeScore, score } = props;
  let index = props.index;
  return (
    <div className="counter">
      <button
        className="counter-action decrement"
        onClick={() => changeScore(index, -1)}
      >
        {" "}
        -{" "}
      </button>
      <span className="counter-score">{score}</span>
      <button
        className="counter-action increment"
        onClick={() => changeScore(index, +1)}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default Counter;
