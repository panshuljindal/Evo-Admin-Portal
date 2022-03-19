import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
//Assets
import Logo from "../assets/brand/logo.svg";
import FilledBtn from "../components/FilledButton";
import InputBox from "../components/InputBox";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Banner from "../components/Banner";
import Select from "@mui/material/Select";
import styled from "@mui/system/styled";
import Avatar from "@mui/material/Avatar";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaMediumM,
} from "react-icons/fa";
import { AiOutlineEye } from "react-icons/ai";
import { CgNametag } from "react-icons/cg";
import { HiOutlineMail } from "react-icons/hi";
import { BsPhone } from "react-icons/bs";
import axios from "axios";
import { useHistory } from "react-router";

const NewSelect = styled(Select)(() => ({
  color: "white",
  outlineColor: "white",
  borderColor: "white",
}));

const NewAvatar = styled(Avatar)(() => ({
  border: "1px solid transparent",
  margin: "0.3rem 0.5rem",
  backgroundColor: "#121212",
}));

function Signup() {
  const [current, setCurrent] = useState(1);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [social, setSocial] = useState("Instagram");
  const [value, setValue] = useState({
    Instagram: "",
    Facebook: "",
    Twitter: "",
    Linkedin: "",
    Medium: "",
  });
  const [password, setPassword] = useState("");
  const [logo, setLogo] = useState(
    <FaInstagram fontSize="1.5rem" color="#6E7191" />
  );
  const [banner, setBanner] = useState({
    data: "",
    value: false,
    isOk: false,
  });
  const [flag, setFlag] = useState(false);
  const history = useHistory();
  const handleChange = (event) => {
    setType(event.target.value);
  };
  const handleSocials = (name, val) => {
    setValue({ ...value, [name]: val });
  };
  const handleNext = (e) => {
    setCurrent((prev) => {
      if (prev >= 3) {
        axios
          .post("https://vit-events-app.herokuapp.com/club/signup", {
            email: email,
            password: password,
            name: name,
            clubType: "Technical",
            linkedIn: "sample.linkedin.com",
            instagram: "sample.ig.com",
            medium: "medium.com",
            youtube: "yt.com",
            twitter: "twitter.com",
            [social]: value,
          })
          .then((res) => {
            localStorage.setItem("token", res.data["auth-token"]);
            setBanner({
              data: "Registered Successfully",
              value: true,
              isOk: true,
            });
            setFlag(true);
            setInterval(() => {
              history.push("/dashboard");
            }, 5500);
          })
          .catch((err) => {
            setBanner({
              data: err.response.data.message,
              value: true,
              isOk: false,
            });
          });
        return prev;
      }
      return prev + 1;
    });
  };

  const handlePrevious = (e) => {
    setCurrent((prev) => {
      return prev !== 1 ? prev - 1 : prev;
    });
  };

  return (
    <Fragment>
      {!flag ? <div className="main">
        <Banner
          open={banner.value}
          setOpen={(value) => {
            setBanner((prev) => {
              return {
                ...prev,
                value: value,
              };
            });
          }}
          text={banner.data}
          isOk={banner.isOk}
        />
        <div className="left-signup">
          <img src={Logo} className="logo-login" alt="Evo Logo"></img>
          <p className="logo-login-text">EVO</p>
          <p className="sub1">Welcome to the Future</p>
          <p className="step">Step {current}:</p>
          <p className="stepName">
            {current === 1
              ? "Details for the Profile "
              : current === 2
              ? "Contact Info"
              : "Authentication"}
          </p>
          <p className="stepDesc">
            {current === 1
              ? "These details will be used for your Club Profile"
              : current === 2
              ? "Help people contact you by adding necessary channels"
              : "This will act as credentials for your club to Login"}
          </p>
        </div>
        <div className="right-login">
          <div className="input-box">
            <h1 className="box-head">Basic Info</h1>
            {current === 1 ? (
              <InputBox
                type="text"
                place="Name of Club"
                value={name}
                logo={<CgNametag fontSize="1.5rem" color="#6E7191" />}
                onChange={(e) => setName(e.target.value)}
              />
            ) : current === 2 ? (
              <InputBox
                type="text"
                place="Phone Number"
                value={phone}
                logo={<BsPhone fontSize="1.5rem" color="#6E7191" />}
                onChange={(e) => setPhone(e.target.value)}
              />
            ) : (
              <InputBox
                type="text"
                place="Email"
                value={email}
                logo={<HiOutlineMail fontSize="1.5rem" color="#6E7191" />}
                onChange={(e) => setEmail(e.target.value)}
              />
            )}
            {current === 1 ? (
              <FormControl
                style={{ width: "17.5rem", marginBottom: "1rem" }}
                fullWidth
              >
                <InputLabel id="demo-simple-select-helper-label">
                  Type
                </InputLabel>
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
            ) : current === 2 ? (
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <NewAvatar
                    onClick={() => {
                      setSocial("Instagram");
                      setLogo(
                        <FaInstagram fontSize="1.5rem" color="#6E7191" />
                      );
                    }}
                    style={
                      social === "Instagram"
                        ? { border: "1px solid #5F2EEA" }
                        : {}
                    }
                  >
                    <FaInstagram />
                  </NewAvatar>
                  <NewAvatar
                    onClick={() => {
                      setSocial("Facebook");
                      setLogo(<FaFacebook fontSize="1.5rem" color="#6E7191" />);
                    }}
                    style={
                      social === "Facebook"
                        ? { border: "1px solid #5F2EEA" }
                        : {}
                    }
                  >
                    <FaFacebook />
                  </NewAvatar>
                  <NewAvatar
                    onClick={() => {
                      setSocial("Twitter");
                      setLogo(<FaTwitter fontSize="1.5rem" color="#6E7191" />);
                    }}
                    style={
                      social === "Twitter"
                        ? { border: "1px solid #5F2EEA" }
                        : {}
                    }
                  >
                    <FaTwitter />
                  </NewAvatar>
                  <NewAvatar
                    onClick={() => {
                      setSocial("Linkedin");
                      setLogo(
                        <FaLinkedinIn fontSize="1.5rem" color="#6E7191" />
                      );
                    }}
                    style={
                      social === "Linkedin"
                        ? { border: "1px solid #5F2EEA" }
                        : {}
                    }
                  >
                    <FaLinkedinIn />
                  </NewAvatar>
                  <NewAvatar
                    onClick={() => {
                      setSocial("Medium");
                      setLogo(<FaMediumM fontSize="1.5rem" color="#6E7191" />);
                    }}
                    style={
                      social === "Medium" ? { border: "1px solid #5F2EEA" } : {}
                    }
                  >
                    <FaMediumM />
                  </NewAvatar>
                </div>
                <InputBox
                  type="text"
                  place={social}
                  value={value[social]}
                  logo={logo}
                  onChange={(e) => handleSocials(social, e.target.value)}
                />
              </div>
            ) : (
              <InputBox
                type="password"
                place="Password"
                value={password}
                logo={<AiOutlineEye fontSize="1.5rem" color="#6E7191" />}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
            <br />
            <FilledBtn text="Next" onClick={handleNext}></FilledBtn>
          </div>
          <Link to={current === 1 && "/login"} exact onClick={handlePrevious}>
            <p className="link-reg">
              {current === 1 ? "Already Registered? " : ""}
              <span>
                {current === 1
                  ? "Login Now"
                  : current === 2
                  ? "Back to Basic Info"
                  : "Back to Contact Info"}
              </span>
            </p>
          </Link>
        </div>
      </div> : <div className="init">
        <img src={Logo} className="logo-init" alt="Evo Logo"></img>
        <p className="logo-init-text">EVO</p>
        <p className="sub1">Welcome to the future</p>
        <p className="sub1-init">Apple Developers Group</p>
        <p className="sub-init">We are initialising your Dashboard...</p>
        <div className="bar"></div>
        <p className="sub-init">This may take a few seconds</p>
      </div>
	  }
    </Fragment>
  );
}

export default Signup;
