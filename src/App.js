import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// Import custom component
import Facebook_login from './components/Facebook_login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A React FB Login Component</h1>
        </header>
        <p className="App-intro">
          Login with FB.
        </p>
        {/* Render custom component */}
        <Facebook_login />
      </div>
    );
  }
}

export default App;
