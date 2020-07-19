import React from "react";
import "./Nav.css";
//public homepage header

function Nav() {
  return (
    <div className="Nav">
      <h1 className="App-title">FitX</h1>
      <div className="App-account">
        <p>Login</p>
        <p>Register</p>
      </div>
    </div>
  );
}

export default Nav;
