import { useState } from "react";
import Navbar from "../components/Navbar";
import "./NewEvent.css";
import InputBox from "../components/InputBox";
import FilledButton from "../components/FilledButton";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { styled } from "@mui/system";
import DateAdapter from "@mui/lab/AdapterLuxon";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import TextField from "@mui/material/TextField";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import FileUpload from "../components/FileUpload";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

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
  "&:placeholder": {
    fontFamily: "poppins, sans-serif",
    color: "#6E7191",
  },
}));

const ChipActual = styled(Chip)(() => ({
  color: "#fcfcfc",
  margin: "0.75rem 0"
}));

const ChipBackground = styled(Chip)(()=> ({
  background:"#5F2EEA",
  margin: "0.75rem 0",
  color:"white",
  border: "1px solid #5F2EEA",
  "&:hover": {
    background:"#5F2EEA",
  }
}))

function NewEvent() {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const [tags,setTags] = useState({Hackathon:true,Riviera:false,Gravitas:false,Workshop:false,NGO:false,Cultural:false})
  const [formValues, setFormValues] = useState({
    title: "",
    body: "",
    image: null,
    data: ""
  });
  const chips = ["Hackathon","Cultural","Riviera","Gravitas","NGO","Workshop"];
  const handleClick = (name) => {
    setTags({...tags,[name]:!tags[name]})
  }

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
            minRows={5}
            placeholder="Event Description"
          />
          <InputBox type="date" place="Date of the Event" value={date} onChange={(newValue) => setDate(newValue)} />
          {/* <LocalizationProvider dateAdapter={DateAdapter}>
            <DatePicker
              label="Date of Event"
              value={date}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="Time Duration"
              value={time}
              onChange={(newValue) => {
                setTime(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider> */}
          <InputBox type="time" place="Time Duration" value={date} onChange={(newValue) => setTime(newValue)} />
          <InputBox type="number" place="Price" />
          <InputBox type="link" place="Registration Link" />
          <FilledButton text="Publish Event" />
        </div>
        <div className="right-new">
          <FileUpload formValues={formValues} setFormValues={setFormValues} />
          <Stack direction="row" spacing={1} style={{display:"flex",alignItems:"center"}}>
            {chips.map(chip=>(
            tags[chip] !== true ? 
            <ChipActual label={chip} variant="outlined" onClick={()=>handleClick(chip)} /> :
            <ChipBackground label={chip} onClick={()=>handleClick(chip)} />
            ))}
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default NewEvent;
