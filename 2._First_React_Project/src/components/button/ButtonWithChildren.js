import React, { Component } from "react";
import "./Button.css";

export default class ButtonWithChildren extends Component {
  render() {
    console.log(this.props);
    const { children } = this.props;
    return <button className="button-with-props">{children || "Click"}</button>;
  }
}
