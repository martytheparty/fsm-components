import React from "react";
import ReactDOM from "react-dom";
import logo from './girl-login.jpg';

function GirlLogin() {
  return (
    <div className="App">
      <img src={logo} alt="login" />
    </div>
  );
}

export default GirlLogin;

const wrapper = document.querySelector("girl-login");
wrapper ? ReactDOM.render(<GirlLogin />, wrapper) : false;
