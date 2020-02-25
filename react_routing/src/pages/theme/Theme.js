import React, { Component } from "react";

export default class Theme extends Component {
  state = {
    themeColor: undefined
  };

  handleColorChange = () => {
    const themeColor = this.state.themeColor;
    this.props.propFromParent(themeColor);
    console.log(themeColor);
  };
  render() {
    // console.log(themeColor)
    return (
      <div>
        <input
          type="color"
          onChange={event => this.setState({ themeColor: event.target.value })}
        />
        <button onClick={() => this.handleColorChange()}>
          {" "}
          Submit Color change{" "}
        </button>
      </div>
    );
  }
}
