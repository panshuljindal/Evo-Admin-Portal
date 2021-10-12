import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
//Assets
import Logo from "../assets/brand/logo.svg";
import FilledBtn from "../components/FilledButton";
import InputBox from "../components/InputBox";

function Login() {
  return (
    <div className="main">
      <div className="left-login">
        <img src={Logo} className="logo-login" alt="Evo Logo"></img>
        <p className="logo-login-text">EVO</p>
        <p className="sub1">Welcome Back</p>
        <p className="sub2">Login to Continue</p>
      </div>
      <div className="right-login">
        <div className="input-box">
          <h1 className="box-head">Login</h1>
          <InputBox type="email" place="Email" />
          <InputBox type="password" place="Password" />
          <br/>
          <FilledBtn text="Login"></FilledBtn>
        </div>
        <Link to="/register" exact>
          <p className="link-reg">
            New Here? <span>Register Your Club to Continue</span>
          </p>
        </Link>
      </div>
    </div>
  );
}

export default Login;
