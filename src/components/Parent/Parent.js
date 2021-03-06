import React, { Component } from "react";
import Balls from "./Balls/Balls";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";
import Score from "./Score/Score";
import MoveList from "./MoveList/MoveList";

class Parent extends Component {
  state = {
    current: 0,
    available: 147,
    moveList: [],
    red: true
  };

  colors = [
    { color: "Yellow", score: 2 },
    { color: "Green", score: 3 },
    { color: "Brown", score: 4 },
    { color: "Blue", score: 5 },
    { color: "Pink", score: 6 },
    { color: "Black", score: 7 }
  ];

  red = { color: "Red", score: 1 };

  callback = color => {
    const { current, available, moveList, red } = this.state;

    const newCurrent = current + color.score;
    const newAvailable = available - color.score;
    const newMoveList = moveList.concat(color);

    this.setState({
      current: newCurrent,
      available: newAvailable,
      moveList: newMoveList,
      red: !red
    });
  };

  reset = () => {
    this.setState({
      current: 0,
      available: 147,
      moveList: [],
      red: true
    });
  };

  render() {
    return (
      <React.Fragment>
        <Grid container spacing={16}>
          <Grid container spacing={16}>
            <Grid item xs={5} />
            <Grid item xs={1}>
              <Score title={"Current"} score={this.state.current} />
            </Grid>
            <Grid item xs={1}>
              <Score title={"Available"} score={this.state.available} />
            </Grid>
          </Grid>
          {this.state.red ? (
            <Grid item xs={12}>
              <Balls color={this.red} callback={this.callback} />
            </Grid>
          ) : (
            this.colors.map(color => {
              return (
                <Grid item xs={4}>
                  <Balls color={color} callback={this.callback} />
                </Grid>
              );
            })
          )}
          <Grid item xs={12}>
            <Card
              onClick={this.reset}
              style={{
                outline: `1px solid black`,
                textAlign: "center"
              }}
            >
              <h1>Reset</h1>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <MoveList moveList={this.state.moveList} />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default Parent;
