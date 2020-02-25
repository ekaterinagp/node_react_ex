import React, { Component } from "react";
import NewComponentForNewPage from "./NewComponentForNewPage";

export default class NewPage extends Component {
  render() {
    return (
      <NewComponentForNewPage
        text={"I am button"}
        customStyle={{ backgroundColor: "grey" }}
        onButtonClicked={() => {
          this.handelButtonclicked("i am clicked");
        }}
      />
    );
  }
}
