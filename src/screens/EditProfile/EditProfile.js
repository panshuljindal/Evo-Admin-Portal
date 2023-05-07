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

  const [formValues, setFormValues] = useState({
    title: "",
    body: "",
    image: null,
    data: "",
  });
  const handleSubmit = () => {
    const data = {
      name: name,
      info: description,
      poster: formValues.data.slice(23),
    };
    console.log(JSON.stringify(data));
    const headers = {
      headers: {
        "auth-token": localStorage.getItem("token"),
      },
    };
    const id = localStorage.getItem("id");
    axios
      .post(
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
          <p className="label">Contact Info</p>
          <InputBox
            type="text"
            place="Email ID"
            value={emailID}
            onChange={(e) => setEmailID(e.target.value)}
          />
          <InputBox
            type="text"
            place="Phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Button className="filledButton" text="" onClick={handleSubmit}>
            Update Profile
          </Button>
        </div>
      </div>
      <div className="right-container">
        <div className="poster-container">
          <FileUpload formValues={formValues}></FileUpload>
        </div>
        <div className="logo-container">
         
		  <img src="https://shopexadvent.blob.core.windows.net/provider-images/Adam_Jones.png" className="logoChange"></img>
		  <FileUpload formValues={formValues}>
			
			</FileUpload>
        </div>
		<p className="action">Click on the images to change them</p>
      </div>
    </div>
  );
}

export default EditProfile;
