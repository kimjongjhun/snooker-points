import React from "react";
import Card from "@material-ui/core/Card/Card";

const Balls = props => {
  return (
    <Card onClick={() => props.callback(props.color)}>
      <h1>{`${props.color.color} ball`}</h1>
    </Card>
  );
};

export default Balls;
