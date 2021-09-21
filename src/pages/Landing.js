import React from "react";
import "./Landing.css";
//Assets
import Logo from "../assets/brand/logo.svg";

function Landing() {
  return (
    <div className="main">
      <img src={Logo} className="logo-img" alt="Evo Logo"></img>
        <p className="logo-text">EVO</p>
        <p className="sub-text">The Best way to Market your Events</p>
      <div className="btn-main">
        <div className="filled-btn"></div>
        <div className="or"></div>
        <div className="hollow-btn"></div>
      </div>
    </div>
  );
}

export default Landing;
