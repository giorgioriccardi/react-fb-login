import React, {Component} from "react";
import FacebookLogin from "react-facebook-login";

export default class FacebookCustomLogin extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    console.log(response);

    this.setState({isLoggedIn: true, userID: response.userID, name: response.name, email: response.email, picture: response.picture.data.url});
  }

  componentClicked = () => console.log('Clicked FB Login');

  render() {
    let fbContent;

    if (this.state.isLoggedIn) {
      // set fbContent initial state to null
      // fbContent = null;
      fbContent = (<div style={{
          width: "30em",
          margin: "auto",
          background: "#aeaeae",
          padding: "2em"
        }}>
        <figure>
          <img src={this.state.picture} alt={this.state.name} title={this.state.name}/>
          <figcaption>Hello {this.state.name}</figcaption>
        </figure>
        {/* In case we render email field as well */}
        Email: {this.state.email}
      </div>);
    } else {
      fbContent = (
        <FacebookLogin
          appId="1234567890"
          autoLoad={true}
          fields="name,picture,email"
            /* in case you want email or other info: */
            /* fields="name,email,picture" */
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}
