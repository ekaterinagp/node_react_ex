import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/about/About";
import FirstPage from "./pages/firstPage/FirstPage";
import SecondPage from "./pages/secondPage/SecondPage";
import ThirdPage from "./pages/thirdPage/ThirdPage";
import Theme from "./pages/theme/Theme";
import Form from "./pages/form/Form";
import { FaBeer } from "react-icons/fa";
import { WiMoonAltNew } from "react-icons/wi";
import Cities from "./pages/cities/Cities";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: undefined,

      firstName: "",
      lastName: ""
    };
  }

  componentDidMount() {
    if (localStorage) {
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        this.setState({
          firstName: user.firstName,
          lastName: user.lastName
        });
      }
    }
  }

  iconsGreeting = async dataFromChild => {
    console.log("it is inside greetings");
    if (
      this.state.firstName === dataFromChild.firstName &&
      this.state.lastName === dataFromChild.lastName
    ) {
      console.log(this.state, dataFromChild);
      this.GreetingsAgain();
    } else {
      await this.setState({
        firstName: dataFromChild.firstName,
        lastName: dataFromChild.lastName
      });
      const user = {
        firstName: this.state.firstName,
        lastName: this.state.lastName
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.GreetingsAgain();
    }
  };

  GreetingsAgain = () => {
    if (!localStorage.hasOwnProperty("user") && !this.state.firstName) {
      return <p> Hello deer! </p>;
    }

    if (localStorage.hasOwnProperty("user")) {
      return (
        <p>
          {" "}
          Welcome back {this.state.firstName} <FaBeer />{" "}
        </p>
      );
    }

    return (
      <p>
        {" "}
        Welcome {this.state.firstName} <WiMoonAltNew />{" "}
      </p>
    );
  };

  handlerSubmitData = async dataFromChild => {
    console.log(dataFromChild);
    // dataFromChild = {
    //   firstName: dataFromChild.firstName,
    //   lastName: dataFromChild.lastName
    // };
    // console.log(dataFromChild);
    // if (dataFromChild) {
    this.iconsGreeting(dataFromChild);
    // }
  };

  onColorChange = colorFromChild => {
    console.log(colorFromChild);
    this.setState({ color: colorFromChild });
  };

  render() {
    return (
      <div>
        <Router>
          <div className="App" style={{ backgroundColor: this.state.color }}>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/firstPage">First</Link>
                </li>
                <li>
                  <Link to="/secondPage">Second</Link>
                </li>
                <li>
                  <Link to="/thirdPage">Third</Link>
                </li>
                <li>
                  <Link to="/themePage">Theme</Link>
                </li>
                <li>
                  <Link to="/form">Form</Link>
                </li>
                <li>
                  <Link to="/cities">Cities</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route
                exact
                path="/"
                component={props => (
                  <h1>
                    <this.GreetingsAgain />
                  </h1>
                )}
              />
              <Route path="/about" component={props => <About {...props} />} />
              <Route path="/firstPage" component={() => <FirstPage />} />
              <Route
                path="/secondPage"
                component={props => <SecondPage {...props} />}
              />
              <Route
                path="/thirdPage"
                component={props => <ThirdPage {...props} />}
              />
              <Route
                path="/themePage"
                component={props => (
                  <Theme {...props} propFromParent={this.onColorChange} />
                )}
              />
              <Route
                path="/form"
                component={props => (
                  <Form
                    {...props}
                    setSubmitFromChild={this.handlerSubmitData}
                  />
                )}
              />
              <Route
                path="/cities"
                component={props => <Cities {...props} />}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
