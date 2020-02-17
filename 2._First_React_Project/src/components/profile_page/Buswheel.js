import React, { Component } from "react";

export default class Buswheel extends Component {
  render() {
    // console.log("Hello", this.props);
    //destructuring assignment
    const { wheel } = this.props;
    // console.log(this.key);

    return (
      <div>
        {/* <h1>Bus </h1> */}
        <p>
          Hello wheel# {wheel.number}, your job is to {wheel.job}
        </p>
      </div>
    );
  }
}
