import React from "react";
// import { useHistory } from "react-router-dom";

export default class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    };
  }
  routeChange = () => {
    this.props.history.push("/");
  };

  handleChange = e => {
    console.log({ e });
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  submitData = () => {
    console.log(this.state);

    this.props.setSubmitFromChild(this.state);
    this.routeChange();
  };

  render() {
    console.log(this.props);

    return (
      <div>
        <input
          //can also work with id
          name="firstName"
          // value={this.state.value}
          onChange={this.handleChange}
          placeholder="First name"
        />
        <input
          name="lastName"
          // value={this.state.value}
          onChange={this.handleChange}
          placeholder="Last name"
        />
        <button onClick={this.submitData}>Submit</button>
      </div>
    );
  }
}
