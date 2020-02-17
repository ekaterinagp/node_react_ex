import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./components/profile_page/ProfilePage";
import Bus from "./components/profile_page/Bus";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navpage: "busPage"
    };
  }
  onNavButtonClicked = navpage => {
    this.setState({ navpage });
    // return (navpage = "busPage" ? <Bus /> : <ProfilePage />);
  };

  // changeState = navpage => {
  //   return (navpage = "busPage" ? <Bus /> : <ProfilePage />);
  // };

  render() {
    const { navpage } = this.state;
    console.log("this is the state:", this.state);

    // one way for if statement, not the best one
    // let pageToShow;

    // if (navpage === "busPage") {
    //   pageToShow = <Bus />;
    // } else {
    //   pageToShow = <ProfilePage />;
    // }

    return (
      <div className="App">
        <button onClick={() => this.onNavButtonClicked("busPage")}>
          Bus Page
        </button>
        <button onClick={() => this.onNavButtonClicked("profilePage")}>
          Profile Page
        </button>
        {navpage === "busPage" ? <Bus /> : <ProfilePage />}
      </div>
    );
  }
}

export default App;
