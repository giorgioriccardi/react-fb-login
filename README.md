# react-fb-login
A React Facebook Login button

Idea nicked from [https://github.com/keppelen/react-facebook-login](https://github.com/keppelen/react-facebook-login)

## Setup Environment

#### Initial boilerplate package created with [Create React App](https://github.com/facebook/create-react-app)
```
npx create-react-app react-fb-login
cd react-fb-login
npm start
```

**Note** If you are not running Visual Studio Code IDE, FireFox has (at today's date) an open issue for running `https://localhost:3000/`, so instead use Chrome until this is fixed.

#### Allow HTTPS for localhost
* Create a .env in root
* Set HTTPS certificate/protocol = true
```
HTTPS=true
```
* Add certificate exception to your browser

* Then open **https://localhost:3000/** to see your app.
When you are ready to deploy to production, create a minified bundle with `npm run build`.

#### Register your FB Login APP id: [https://developers.facebook.com/apps/](https://developers.facebook.com/apps/)

**Note** Under settings->basic set the **App Domains** to `localhost` or it won't work
[https://developers.facebook.com/apps/1234567890/settings/basic/](https://developers.facebook.com/apps/1234567890/settings/basic/)

## Component Code

* Create a `Components` folder under `./src`
* Create a `Facebook_custom_login.js` file
* Install [React Facebook Login](https://www.npmjs.com/package/react-facebook-login) 'npm i react-facebook-login'
* Create a class based component `Facebook_custom_login`
```
import React, {Component} from "react";

export default class Facebook_custom_login extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}
```

* Import custom component in `./App.js`
```
import Facebook_custom_login from './components/Facebook_custom_login';
```

* Add initial state
```
state = {
  isLoggedIn: false,
  userID: "",
  name: "",
  email: "",
  picture: ""
};
```

* Initialize a variable to check if user isLoggedIn
**Note** Insert your own FB App ID ~~1234567890~~
```
render() {
  let fbContent;

  if (this.state.isLoggedIn) {
    fbContent = null;
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

```

**Note**  This is a Class based component so the 2 methods `onClick` and `callback` require this.
`onClick={this.componentClicked}`
`callback={this.responseFacebook}`

* Add our methods
```
responseFacebook = response => {
  console.log(response);
}

componentClicked = () => console.log('clicked');
```

* and we Return the `fbContent`
```
return <div>{fbContent}</div>;
```

*
