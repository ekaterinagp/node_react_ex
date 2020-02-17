import React, { Component } from "react";
import Profile from "./Profile";

export default class ProfilePage extends Component {
  render() {
    //can also define variable as profile={ name: "blabla2", hobby: "sit" } and put it into profile
    const profile1 = { name: "blabla2", hobby: "sit" };
    const profile2 = { name: "blabla3", hobby: "sit down" };
    const profile3 = { name: "blabla4", hobby: "sit up" };

    const profiles = [profile1, profile2, profile3];

    return (
      <div>
        <h1>Profile Page</h1>
        {/* <Profile profile={profile1} />
        <Profile profile={profile2} />
        <Profile profile={profile3} /> */}
        {profiles.map((singleProfile, index) => {
          return <Profile key={"profile" + index} profile={singleProfile} />;
        })}
      </div>
    );
  }
}
