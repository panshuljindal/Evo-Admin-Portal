import React, { Component } from "react";
// import { ReactComponent as Banner } from "./assets/banner.svg";
import './style.css';
import banner from './assets/banner.png';
function Partner() {
  return (
    <div className="partner">
      <h3>Partners Program</h3>
      <img src={banner} alt="Evo Partners Program Banner" width="95%" />
      <p>
      evo Partners Program offers you state of class exclusive features to help you understand and Boost your Marketing and Reach.
        <br /><br />
        Some of the Features Include:
        <ul>
          <li>
            Access to Statistics like Views to Undertand what kind of Events are
            being Viewed by your audience.
          </li>
          <li>
            Learn how your Events Rank against other events in the same category
            or overall.
          </li>
          <li>
            Edit Event Details multiple times to fit according to changing
            times.
          </li>
          <li>Access to Past events and data</li>
          <li>Higher chances of Landing on the Popular Page of our App</li>
        </ul>
      </p>
    </div>
  );
}

export default Partner;
