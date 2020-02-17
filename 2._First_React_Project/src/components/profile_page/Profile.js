import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    // console.log("Hello", this.props);
    //destructuring assignment
    const { name, hobby } = this.props.profile;

    return (
      <div>
        <h1>Profile </h1>
        <p>
          Hello {name}, your hobby is {hobby}
        </p>
      </div>
    );
  }
}
