import React from "react";
import Card from "@material-ui/core/Card/Card";

const MoveList = props => {
  return (
    <Card>
      {props.moveList.map(move => {
        return <Card>{`A ${move.color} has been made.`}</Card>;
      })}
    </Card>
  );
};

export default MoveList;
