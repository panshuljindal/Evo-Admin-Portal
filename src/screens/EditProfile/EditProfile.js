import Navbar from "../components/Navbar";
import InputBox from "../components/InputBox";
import { TextareaAutosize } from "@mui/material";
import FileUpload from "../components/FileUpload";
import "./EditProfile.css";
import Chip from "@mui/material/Chip";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import axios from "axios";
import { styled } from "@mui/system";
import Banner from "../../components/Banner";
import Avatar from "@mui/material/Avatar";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedinIn,
  FaMediumM,
} from "react-icons/fa";
const reader = new FileReader();
const NewAvatar = styled(Avatar)(() => ({
  border: "1px solid transparent",
  margin: "0.3rem 0.5rem",
  backgroundColor: "#121212",
}));

const TextArea = styled(TextareaAutosize)(() => ({
  width: "84%",
  backgroundColor: "#181818",
  borderRadius: "16px",
  border: "none",
  padding: "1rem",
  color: "#fcfcfc",
  margin: "0.75rem 0",
  fontFamily: "poppins, sans-serif",
  fontSize: "1rem",
  "&:focus": {
    outline: "none",
    border: "none",
  },
  "&::placeholder": {
    fontFamily: "poppins, sans-serif",
    color: "#6e7191",
  },
}));
function EditProfile() {
  const clubDetails = JSON.parse(localStorage.getItem("clubDetails"));
  const history = useHistory();
  const [tagLine, setTagLine] = useState("");
  const [emailID, setEmailID] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [banner, setBanner] = useState({
    data: "",
    value: false,
    isOk: false,
  });

  const [social, setSocial] = useState("Instagram");
  const [value, setValue] = useState({
    Instagram: "",
    Facebook: "",
    Twitter: "",
    Linkedin: "",
    Medium: "",
  });

  const [logo, setLogo] = useState(
    <FaInstagram fontSize="1.5rem" color="#6E7191" />
  );
  const handleSocials = (name, val) => {
    setValue({ ...value, [name]: val });
  };
  const [logoFormValues, setLogoFormValues] = useState({
    title: "",
    body: "",
    image: null,
    data: "",
  });
  const [backdropFormValues, setBackdropFormValues] = useState({
    title: "",
    body: "",
    image: null,
    data: "",
  });
  const handleImageChange = (event) => {
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        setBackdropFormValues((prevFormValues) => ({
          ...prevFormValues,
          image: event.target.files ? event.target.files[0] : null,
          data: reader.result,
        }));
        console.log(reader.result);
      };
    } else {
      console.log("Not uploaded yet");
    }
  };

  const handleSubmit = () => {
    const data = {
      name: name,
      tagline: tagLine,
      description: description,
      linkedIn: "sample.linkedin.com",
      instagram: "sample.ig.com",
      medium: "medium.com",
      youtube: "yt.com",
      twitter: "twitter.com",
      [social]: value,
      email: emailID,
    };
    console.log(JSON.stringify(data));
    const headers = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };
    let eventData = {};
    const id = localStorage.getItem("id");
    if (backdropFormValues.data) {
			eventData = {
				...data,
				poster: backdropFormValues.data
			}
		} else {
			eventData = {
				...data
			}
		}
    axios
      .put(
        `https://evo-backend-production.up.railway.app/club/editclubprofile/${id}`,
        data,
        headers
      )
      .then((res) => {
        if (res.status == 200) {
          setBanner({
            data: "Profile Updated Successfully",
            value: true,
            isOk: true,
          });
          setInterval(() => {
            history.push("/dashboard");
          }, 1500);
        }

        console.log("Request sent with data: " + eventData)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="main">
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
      <div className="left">
        <Navbar />
      </div>

      <div className="middle-container">
        <div className="test">
          <p className="title">Edit Profile</p>
          <p className="label">Basic Info</p>
          <InputBox
            type="text"
            place="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <InputBox
            type="text"
            place="Tagline"
            value={tagLine}
            onChange={(e) => setTagLine(e.target.value)}
          />
          <TextArea
            aria-label="minimum height"
            minRows={5}
            placeholder="Club Description (250 max characters)"
            onChange={(e) => setDescription(e.target.value)}
          />
          <p className="label">Social links</p>
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
                  setLogo(<FaInstagram fontSize="1.5rem" color="#6E7191" />);
                }}
                style={
                  social === "Instagram" ? { border: "1px solid #5F2EEA" } : {}
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
                  social === "Facebook" ? { border: "1px solid #5F2EEA" } : {}
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
                  social === "Twitter" ? { border: "1px solid #5F2EEA" } : {}
                }
              >
                <FaTwitter />
              </NewAvatar>
              <NewAvatar
                onClick={() => {
                  setSocial("Linkedin");
                  setLogo(<FaLinkedinIn fontSize="1.5rem" color="#6E7191" />);
                }}
                style={
                  social === "Linkedin" ? { border: "1px solid #5F2EEA" } : {}
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
          <p className="label">Contact Info</p>
          <InputBox
            type="text"
            place="Email ID"
            value={emailID}
            onChange={(e) => setEmailID(e.target.value)}
          />
          {/* <InputBox
            type="text"
            place="Phone numbe"
            value={clubDetails.clubType}
            onChange={(e) => setPhone(e.target.value)}
          /> */}
          <Button className="filledButton" text="" onClick={handleSubmit}>
            Update Profile
          </Button>
        </div>
      </div>
      <div className="right-container">
        <div className="poster-container backdropChange">
          <label htmlFor="fileInput">
            <img src={clubDetails.backdrop}></img>
          </label>
          <input
            type="file"
            id="fileInput"
            hidden
            onChange={(e) => handleImageChange(e)}
            // onChange={(e) => setBackdropFormValues(e.target.files[0])}
          ></input>
          {backdropFormValues != null
            ? console.log(backdropFormValues.name)
            : console.log("Not yet uploaded")}
        </div>
        <div className="logo-container logoChange">
          <img src={clubDetails.logo}></img>
          {/* <FileUpload formValues={logoFormValues}></FileUpload> */}
        </div>
        <p className="action">Click on the images to change them</p>
        {/* <p> Hi { backdropFormValues && backdropFormValues.name}</p> */}
      </div>
    </div>
  );
}

export default EditProfile;
