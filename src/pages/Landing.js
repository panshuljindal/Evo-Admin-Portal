import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./Landing.css";
import Logo from "../assets/brand/logo.svg";
import { ReactComponent as OrIcon } from "./assets/or.svg";
import Login from "./Login";
import Signup from "./Signup";
import FilledBtn from "../components/FilledButton";
import HollowBtn from "../components/HollowButton";

export default function Landing() {
  return (
    <motion.section exit={{ opacity: 0 }}>
      <InitialTransition />
      <div className="layout">
        <img src={Logo} className="logo-img" alt="Evo Logo"></img>
        <p className="logo-text">EVO</p>
        <p className="sub-text">The Best way to Market your Events</p>

        <div className="btn-main">
          <Link to="/register" exact>
            <FilledBtn text="Register My Club"></FilledBtn>
          </Link>
          <div className="or">
            <OrIcon />
          </div>
          <Link to="/login" replace>
           <HollowBtn text="Login"></HollowBtn>
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

const blackBox = {
  initial: {
    height: "100%",
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      when: "afterChildren",
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 80,
    transition: {
      duration: 1.7,
      ease: [0.87, 0, 0.13, 1],
    },
  },
};

const InitialTransition = () => {
  // Scroll user to top to avoid showing the footer
  React.useState(() => {
    typeof windows !== "undefined" && window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="black"
      initial="initial"
      animate="animate"
      variants={blackBox}
      onAnimationStart={() => document.body.classList.add("overflow-hidden")}
      onAnimationComplete={() =>
        document.body.classList.remove("overflow-hidden")
      }
    >
      <motion.svg variants={textContainer} className="black-text">
        <pattern
          id="pattern"
          patternUnits="userSpaceOnUse"
          width={750}
          height={800}
          className="text-white"
        >
          <rect className="rectangle" />
          <motion.rect variants={text} className="rectangle-text" />
        </pattern>
        <text
          className="rect-text"
          textAnchor="middle"
          x="50%"
          y="50%"
          style={{ fill: "url(#pattern)" }}
        >
          welcome to evo
        </text>
      </motion.svg>
    </motion.div>
  );
};
