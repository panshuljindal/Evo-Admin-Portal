import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
//Assets
import Logo from "../assets/brand/logo.svg";
import FilledBtn from "../components/FilledButton";
import InputBox from "../components/InputBox";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from "@mui/system/styled";


const NewSelect = styled(Select)(() => ({
  color: 'white',
  outlineColor: 'white',
  borderColor: 'white',
  '& .MuiSelect-select': {
    borderColor: "white",
    outlineColor: "white",
    color: 'white'
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '2px solid #5F2EEA55'
    },
    '&:hover fieldset': {
      borderColor: '#5F2EEAFF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#5F2EEAFF',
    },
  },
  '& .MuiOutlinedInput-root': {
    color: '#fcfcfc'
  }
}))

function Signup() {
  const [current, setCurrent] = useState(1);
  const [name, setName] = useState("");
  const [type, setType] = useState("");

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleNext = (e) => {
    setCurrent(prev => {
      return prev !== 3 ? prev + 1 : prev;
    })
  };

  const handlePrevious = (e) => {
    setCurrent(prev => {
      return prev !== 1 ? prev-1 : prev;
    })
  }

  return (
    <div className="main">
      <div className="left-signup">
        <img src={Logo} className="logo-login" alt="Evo Logo"></img>
        <p className="logo-login-text">EVO</p>
        <p className="sub1">Welcome to the Future</p>
        <p className="step">Step {current}:</p>
        <p className="stepName">{current === 1 ? "Details for the Profile " : (current === 2 ? "Contact Info" : "Authentication")}</p>
        <p className="stepDesc">
          {current === 1 ? "These details will be used for your Club Profile" : (current === 2 ? "Help people contact you by adding necessary channels" : "This will act as credentials for your club to Login")}
        </p>
      </div>
      <div className="right-login">
        <div className="input-box">
          <h1 className="box-head">Basic Info</h1>
          <InputBox type="text" place="Name of Club" value={name}  onChange={(e) => setName(e.target.value)} />
          <FormControl style={{width: '17.5rem', marginBottom: '1rem'}}  fullWidth>
            <InputLabel id="demo-simple-select-helper-label">Type</InputLabel>
            <NewSelect
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={type}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"T"}>Technical</MenuItem>
              <MenuItem value={"C"}>Cultural</MenuItem>
              <MenuItem value={"N"}>NGO</MenuItem>
            </NewSelect>
            </FormControl>
          <br />
          <FilledBtn text="Next" onClick={handleNext}></FilledBtn>
        </div>
        <Link to={current === 1 && "/login"} exact onClick={handlePrevious} >
          <p className="link-reg">
            {current === 1 ? "Already Registered?" : ""}<span>
            {current === 1 ? "Login Now" : (current === 2 ? "Back to Basic Info" : "Back to Contact Info")}
            </span>
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
