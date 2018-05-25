import React, {Component} from "react";
import FacebookLogin from "react-facebook-login";

export default class Facebook_custom_login extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  render() {
    return (
      <div>
        <p>Render component logic</p>
      </div>
    )
  }
}
