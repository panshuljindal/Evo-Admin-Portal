import React from "react";
import "./Login.css";
//Assets
import Logo from "../assets/brand/logo.svg";

function Signup() {
  return (
    <div className="init">
      <img src={Logo} className="logo-init" alt="Evo Logo"></img>
      <p className="logo-init-text">EVO</p>
      <p className="sub1">Welcome to the future</p>
      <p className="sub1-init">Apple Developers Group</p>
      <p className="sub-init">We are initialising your Dashboard...</p>
      <div className="bar"></div>
      <p className="sub-init">This may take a few seconds</p>
    </div>
  );
}

export default Signup;
