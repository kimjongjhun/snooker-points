import React from "react";
import Card from "@material-ui/core/Card/Card";
import Grid from "@material-ui/core/Grid/Grid";

const Balls = props => {
  return (
    <Card
      onClick={() => props.callback(props.color)}
      style={{
        outline: `1px solid ${props.color.color}`
      }}
    >
      {console.log("props.color", props.color)}
      <Grid container>
        <Grid item xs={6} style={{ backgroundColor: props.color.color }} />
        <Grid item xs={6} style={{ textAlign: "center" }}>
          <h1>{`${props.color.color} ball`}</h1>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Balls;
