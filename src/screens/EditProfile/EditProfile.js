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
  const [tagLine, setTagLine] = useState(clubDetails.tagLine);
  const [emailID, setEmailID] = useState(clubDetails.email);
  const [name, setName] = useState(clubDetails.name);
  const [description, setDescription] = useState(clubDetails.description);
  const [banner, setBanner] = useState({
    data: "",
    value: false,
    isOk: false,
  });

  const [social, setSocial] = useState("Instagram");
  const [value, setValue] = useState({
    Instagram: clubDetails.instagram,
    Facebook: clubDetails.facebook,
    Twitter: clubDetails.twitter,
    Linkedin: clubDetails.linkedIn,
    Medium: clubDetails.medium,
  });
  console.log(value);
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
  const handleImageChange = (event, type) => {
    console.log(type)
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]);
      reader.onloadend = () => {
        if(type === "backdrop"){
          setBackdropFormValues((prevFormValues) => ({
            ...prevFormValues,
            image: event.target.files ? event.target.files[0] : null,
            data: reader.result,
          }));
        } else {
          setLogoFormValues((prevFormValues) => ({
            ...prevFormValues,
            image: event.target.files ? event.target.files[0] : null,
            data: reader.result,
          }));
        }
      }
    } else if(event.target.files[1]){
      reader.readAsDataURL(event.target.files[1]);
      reader.onloadend = () => {
        if(type == "backdrop"){
          setBackdropFormValues((prevFormValues) => ({
            ...prevFormValues,
            image: event.target.files ? event.target.files[0] : null,
            data: reader.result,
          }));
        } else {
          setLogoFormValues((prevFormValues) => ({
            ...prevFormValues,
            image: event.target.files ? event.target.files[0] : null,
            data: reader.result,
          }));
        }
      }
    } else {
      console.log("Not uploaded yet");
    }
  };

  const handleSubmit = () => {
    const data = {
      name: name,
      tagline: tagLine,
      description: description,
      linkedIn: value.Linkedin,
      instagram: value.Instagram,
      medium: value.Medium,
      twitter: value.Twitter,
      email: emailID,
    };
    const headers = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };
    let eventData = data;
    const id = localStorage.getItem("id");
    console.log(backdropFormValues.data);
    if (backdropFormValues.data.length > 0) {
			eventData = {
				...eventData,
				backdrop: backdropFormValues.data
			}
		} 
    if (logoFormValues.data.length > 0) {
			eventData = {
				...eventData,
				logo: logoFormValues.data
			}
		}
    axios
      .post(
        `https://evo-backend-production.up.railway.app/club/editClubProfile/${id}`,
        eventData,
        headers
      )
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem("clubDetails", JSON.stringify(res.data));
          setBanner({
            data: "Profile Updated Successfully",
            value: true,
            isOk: true,
          });
          setInterval(() => {
            history.push("/dashboard");
          }, 1500);
        }

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
            value={description}
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
          <Button className="filledButton" text="" onClick={handleSubmit}>
            Update Profile
          </Button>
        </div>
      </div>
      <div className="right-container">
        <div className="poster-container backdropChange">
          <label htmlFor="fileInput">
            <img src={clubDetails.backdrop} ></img>
          </label>
          <input
            type="file"
            id="fileInput"
            hidden
            onChange={(e) => handleImageChange(e, "backdrop")}
          ></input>
          {backdropFormValues != null
            ? console.log(backdropFormValues.name)
            : console.log("Not yet uploaded")}
        </div>
        <div className="logo-container logoChange">
          <label htmlFor="fileInputL">
            <img src={clubDetails.logo}></img>
          </label>
          <input
            type="file"
            id="fileInputL"
            hidden
            onChange={(e) => handleImageChange(e, "logo")}
          ></input>
          {logoFormValues != null
            ? console.log(logoFormValues.name)
            : console.log("Not yet uploaded")}
        </div>
        <p className="action">Click on the images to change them</p>
      </div>
    </div>
  );
}

export default EditProfile;
