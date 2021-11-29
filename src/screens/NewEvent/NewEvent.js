import { useState } from "react";
import Navbar from "../components/Navbar";
import "./NewEvent.css";
import InputBox from "../components/InputBox";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { styled } from "@mui/system";

const TextArea = styled(TextareaAutosize)(() => ({
	width: '84%',
	backgroundColor: '#181818',
	borderRadius: '16px',
	border: 'none',
	padding: '1rem',
	color: '#fcfcfc',
	margin: '0.75rem 0',
	fontFamily: "poppins, sans-serif",
	fontSize: '1rem',
	'&:focus': {
		outline: 'none',
		border: 'none'
	},
	'&:placeholder': {
		fontFamily: "poppins, sans-serif",
		color: '#6E7191'
	}
}))


function NewEvent() {
  return (
    <div>
      <div className="cont-dash">
        <div className="left">
          <Navbar />
        </div>
        <div className="middle-new">
          <p className="title">New Event</p>
          <InputBox type="text" place="Name of the Event" />
          <TextArea
            aria-label="minimum height"
            minRows={9}
            placeholder="Event Description"
          />
          <InputBox type="date" place="Date of the Event" />
          <InputBox type="time" place="Time Duration" />
          <InputBox type="number" place="Price" />
          <InputBox type="link" place="Registration Link" />
        </div>
        <div className="right-new">
          <InputBox type="file" place="Name of the Event" />
        </div>
      </div>
    </div>
  );
}

export default NewEvent;
