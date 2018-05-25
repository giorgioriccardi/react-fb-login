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

  responseFacebook = response => {
    console.log(response);
  }

  componentClicked = () => console.log('clicked');

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      // do something
    } else {
      fbContent = (
        <FacebookLogin
          appId="1234567890"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
