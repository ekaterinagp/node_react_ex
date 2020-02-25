import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import ProfilePage from "./components/profile_page/ProfilePage";
import Bus from "./components/profile_page/Bus";
import ButtonWithProps from "./components/button/ButtonWithProps";
import NewComponentForNewPage from "./components/profile_page/NewComponentForNewPage";
import ButtonWithChildren from "./components/button/ButtonWithChildren";

// const menu = [
//   {
//     id: 1,
//     title: "busPage"
//   },
//   {
//     id: 2,
//     title: "profilePage"
//   },
//   ,
//   {
//     id: 3,
//     title: "newPage"
//   }
// ];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageToRender: "undifined"
    };
  }
  handelNavButtonClicked = navpage => {
    this.setState({ navpage });
    // return (navpage = "busPage" ? <Bus /> : <ProfilePage />);
  };

  // changeState = navpage => {
  //   return (navpage = "busPage" ? <Bus /> : <ProfilePage />);
  // };

  // handelMenuItems = () => {
  //   console.log(title);
  //   title = navpage;
  // };

  handelMenuItems = navpage => {
    if (navpage === "busPage") {
      this.setState({ pageToRender: <Bus /> });
    } else if (navpage === "profilePage") {
      this.setState({ pageToRender: <ProfilePage /> });
    } else {
      this.setState({ pageToRender: <NewComponentForNewPage /> });
    }
  };

  handelButtonclicked = text => {
    console.log(text);
  };

  render() {
    const { pageToRender } = this.state;
    // console.log("this is the state:", this.state);

    // FIRST way for if statement, not the best one
    // let pageToShow;

    // if (navpage === "busPage") {
    //   pageToShow = <Bus />;
    // } else {
    //   pageToShow = <ProfilePage />;
    // }

    return (
      <div className="App">
        <NewComponentForNewPage
          text={"I am button"}
          customStyle={{ backgroundColor: "grey" }}
          onButtonClicked={() => {
            this.handelButtonclicked("i am clicked");
          }}
        />
        <ButtonWithProps
          buttonText={"Submit"}
          customStyle={{ backgroundColor: "blue" }}
          onButtonClicked={() => {
            this.handelButtonclicked("first clicked");
          }}
        />
        <ButtonWithProps
          buttonText={"Bus Page"}
          customStyle={{ backgroundColor: "grey" }}
          onButtonClicked={() => this.setState({ pageToRender: <Bus /> })}
        />

        <ButtonWithProps
          buttonText={"Profile Page"}
          customStyle={{ backgroundColor: "red" }}
          onButtonClicked={() =>
            this.setState({ pageToRender: <ProfilePage /> })
          }
        />
        <ButtonWithProps
          buttonText={"New Page"}
          customStyle={{ backgroundColor: "purple" }}
          onButtonClicked={() =>
            this.setState({ pageToRender: <NewComponentForNewPage /> })
          }
        />
        {pageToRender}
        <ButtonWithChildren></ButtonWithChildren>
        {/* {navpage === "busPage" ? (
          <Bus />
        ) : navpage === "profilePage" ? (
          <ProfilePage />
        ) : (
          <NewComponentForNewPage />
        )} */}
      </div>
    );
  }
}

export default App;
