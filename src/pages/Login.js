import React from "react";
import "./Login.css";
//Assets
import Logo from "../assets/brand/logo.svg";

function Login() {
  return (
    <div className="main">
      <div className="left-login">
        <img src={Logo} className="logo-login" alt="Evo Logo"></img>
        <p className="logo-login-text">EVO</p>
        <p className="sub1">Welcome Back</p>
        <p className="sub2">Login to Continue</p>
      </div>
      <div className="right-login"></div>

      <div className="btn-main">
        <div className="filled-btn"></div>
        <div className="or"></div>
        <div className="hollow-btn"></div>
      </div>
    </div>
  );
}

export default Login;
