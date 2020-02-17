import React, { Component } from "react";
import Buswheel from "./Buswheel";

export default class Bus extends Component {
  render() {
    const wheel1 = { number: 1, job: "spin" };
    const wheel2 = { number: 2, job: "ride" };
    const wheel3 = { number: 3, job: "roll" };
    const wheel4 = { number: 4, job: "drive" };

    const wheels = [wheel1, wheel2, wheel3, wheel4];

    return (
      <div>
        <h1>Bus</h1>
        {wheels.map((oneWheel, index) => {
          return <Buswheel key={"wheel" + index} wheel={oneWheel} />;
        })}
      </div>
    );
  }
}
