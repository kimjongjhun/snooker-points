import React from "react";
import Card from "@material-ui/core/Card/Card";

const MoveList = props => {
  return (
    <Card
      style={{
        outline: props.moveList.length > 0 ? "1px solid black" : null
      }}
    >
      {props.moveList.map(move => {
        return <Card>{`A ${move.color} has been made.`}</Card>;
      })}
    </Card>
  );
};

export default MoveList;
