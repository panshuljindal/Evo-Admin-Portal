import React from "react";
import "./Login.css";
//Assets
import Logo from "../assets/brand/logo.svg";

function Signup() {
  return (
    /*
    <div className="main">
      <div className="left-signup">
        <img src={Logo} className="logo-login" alt="Evo Logo"></img>
        <p className="logo-login-text">EVO</p>
        <p className="sub1">Welcome to the future</p>
        <p className="step">Step 1 :</p>
        <p className="stepName">Details for the Profile</p>
        <p className="stepDesc">These details will be used for your Club Profile</p>
        <p className="step">Step {props.step} :</p>
        <p className="stepName">{props.stepName}</p>
        <p className="stepDesc">{props.stepDesc}</p>
      </div>
      <div className="right"></div>

      <div className="btn-main">
        <div className="filled-btn"></div>
        <div className="or"></div>
        <div className="hollow-btn"></div>
      </div>
        */
    <div className="init">
      <img src={Logo} className="logo-init" alt="Evo Logo"></img>
      <p className="logo-init-text">EVO</p>
      <p className="sub1">Welcome to the future</p>
      <p className="sub1-init">Apple Developers Group</p>
      <p className="sub-init">We are initialising your Dashboard...</p>
      <div className="bar"></div>
      <p className="sub-init">This may take a few seconds</p>
    </div>
    //</div>
  );
}

export default Signup;
