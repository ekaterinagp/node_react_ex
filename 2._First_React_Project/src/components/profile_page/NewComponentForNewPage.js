import React, { Component } from "react";

export default class NewComponentForNewPage extends Component {
  render() {
    const { text, customStyle, logText, onButtonClicked } = this.props;
    return (
      <div
        style={customStyle}
        onClick={() => {
          onButtonClicked(logText);
        }}
      >
        {text ? text : "Click"}
      </div>
    );
  }
}
