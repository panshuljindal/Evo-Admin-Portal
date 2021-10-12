import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
//Assets
import Logo from "../assets/brand/logo.svg";
import FilledBtn from "../components/FilledButton";
import InputBox from "../components/InputBox";

function Signup() {
  return (
    <div className="main">
      <div className="left-signup">
        <img src={Logo} className="logo-login" alt="Evo Logo"></img>
        <p className="logo-login-text">EVO</p>
        <p className="sub1">Welcome to the Future</p>
        <p className="step">Step 1:</p>
        <p className="stepName">Details for the Profile</p>
        <p className="stepDesc">These details will be used for your Club Profile</p>
      </div>
      <div className="right-login">
        <div className="input-box">
          <h1 className="box-head">Basic Info</h1>
          <InputBox type="email" place="Email" />
          <InputBox type="password" place="Password" />
          <br/>
          <FilledBtn text="Next"></FilledBtn>
        </div>
        <Link to="/login" exact>
          <p className="link-reg">
            Already Registered? <span>Login Now</span>
          </p>
        </Link>
      </div>
    </div>
    /*<div className="init">
      <img src={Logo} className="logo-init" alt="Evo Logo"></img>
      <p className="logo-init-text">EVO</p>
      <p className="sub1">Welcome to the future</p>
      <p className="sub1-init">Apple Developers Group</p>
      <p className="sub-init">We are initialising your Dashboard...</p>
      <div className="bar"></div>
      <p className="sub-init">This may take a few seconds</p>
    </div>*/
  );
}

export default Signup;
