import React from "react";

const Score = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h1>{props.score}</h1>
    </div>
  );
};

export default Score;
