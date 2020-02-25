import React, { Component } from "react";
import "./Button.css";

export default class ButtonWithProps extends Component {
  render() {
    const { buttonText, customStyle, onButtonClicked } = this.props;

    return (
      <div>
        <button
          className="button-with-props"
          style={customStyle}
          onClick={() => {
            onButtonClicked("custom text");
          }}
        >
          {buttonText ? buttonText : "Click"}
        </button>
      </div>
    );
  }
}
