import React from "react";
import Profile from "../presentational/Profile.jsx";

const user = require("../../../assets/profile.js").profile;

class ProfileContainer extends React.Component {
  render() {
    return (
      <div>
        <Profile
          name={user.name}
          profileImage={user.profileImage}
          profileUrl={user.profileImage}
          job={user.job}
          title={user.title}
          description={user.description}
          links = {user.links}
        />
      </div>
    );
  }
}

export default ProfileContainer;
