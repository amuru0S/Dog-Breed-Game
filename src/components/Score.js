import React, { Component } from "react";
import request from "superagent";

export default class Score extends Component {
  render() {
    // const dummyArray = [1, 1, 1, 1];
    // const reduce = (acc, current) => acc + current;
    // console.log((dummyArray.reduce(reduce) / 3) * 100);
    const scoreCalculation = () => {
      if (event.target.value === correctAsver) {
        return this.reduce1;
      } else {
        return this.reduce2;
      }
    };
    return (
      <div className="Score">
        <h2>Your Score is:</h2>
      </div>
    );
  }
}
