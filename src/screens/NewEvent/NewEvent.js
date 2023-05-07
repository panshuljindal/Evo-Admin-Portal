import { useState } from "react";
import Navbar from "../components/Navbar";
import "./NewEvent.css";
import InputBox from "../components/InputBox";
import FilledBtn from "../components/FilledButton";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { styled } from "@mui/system";
import FileUpload from "../components/FileUpload";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import axios from "axios";
import Button from "@mui/material/Button"
import Banner from "../../components/Banner"
import { useHistory } from "react-router-dom";

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

const ChipActual = styled(Chip)(() => ({
	color: "#fcfcfc",
	margin: "0.75rem 0",
}));

const ChipBackground = styled(Chip)(() => ({
	background: "#5F2EEA",
	margin: "0.75rem 0",
	color: "white",
	border: "1px solid #5F2EEA",
	"&:hover": {
		background: "#5F2EEA",
	},
}));

function NewEvent() {
	const history = useHistory()
	const [date, setDate] = useState("");
	const [registrationLink, setRegistrationLink] = useState("");
	const [time, setTime] = useState("");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("")
	const [price, setPrice] = useState(null)
	const [duration, setDuration] = useState(null)
	const [banner, setBanner] = useState({
		data: "",
		value: false,
		isOk: false,
	});
	const [tags, setTags] = useState({
		Hackathon: true,
		Riviera: false,
		Gravitas: false,
		Workshop: false,
		NGO: false,
		Cultural: false,
	});
	const [formValues, setFormValues] = useState({
		title: "",
		body: "",
		image: null,
		data: "",
	});
	const chips = [
		"Hackathon",
		"Cultural",
		"Riviera",
		"Gravitas",
		"NGO",
		"Workshop",
	];
	const handleClick = (name) => {
		setTags({ ...tags, [name]: !tags[name] });
	};
	const handleSubmit = () => {
		const eventType = []
		for (const key in tags) {
			if (tags[key]) {
				eventType.push(key)
			}
		}
		const data = {
			name: name,
			info: description,
			poster: formValues.data.slice(23),
			price: price,
			timestamp: Date.parse(date + " " + time) / 1000,
			duration: duration,
			registrationLink: registrationLink,
			eventType: eventType
		};
		console.log(JSON.stringify(data))
		const headers = {
			headers: {
				"auth-token": localStorage.getItem("token"),
			}
		}
		axios
			.post("https://evo-backend-production.up.railway.app/events/create", data, headers)
			.then((res) => {
				if (res.status == 200) {
					setBanner({
						data: "Event Added Successfully",
						value: true,
						isOk: true,
					});
					setInterval(() => {
						history.push("/dashboard")
					}, 1500);
				}

			}).catch((error) => {
				console.log(error)

			})
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
			<div className="cont-dash">
				<div className="left">
					<Navbar />
				</div>
				<div className="middle-new">
					<p className="title">New Event</p>
					<InputBox
						type="text"
						place="Name of the Event"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
		
					<TextArea
						aria-label="minimum height"
						minRows={2}
						placeholder="Event Description"
						onChange={(e) => setDescription(e.target.value)}
					/>
				
					<InputBox
						type="date"
						place="Date of the Event"
						value={date}
						onChange={(newValue) => setDate(newValue.target.value)}
					/>
					<InputBox
						type="time"
						place="Time Duration"
						value={time}
						onChange={(newValue) => setTime(newValue.target.value)}
					/>
					<InputBox
						type="number"
						place="Duration"
						value={duration}
						onChange={(newValue) => setDuration(newValue.target.value)}
					/>
					<InputBox
						type="number"
						place="Price"
						value={price}
						onChange={(newValue) => setPrice(newValue.target.value)}
					/>
					<InputBox
						type="link"
						place="Registration Link"
						onChange={(newValue) => setRegistrationLink(newValue.target.value)}
					/>
					<Button className="filledButton" text="" onClick={handleSubmit} >Publish Event</Button>
				</div>
				<div className="right-new">
					<FileUpload
						formValues={formValues}
						setFormValues={setFormValues}
					/>
					<Stack
						direction="row"
						spacing={1}
						style={{ display: "flex", alignItems: "center" }}
					>
						{chips.map((chip) =>
							tags[chip] !== true ? (
								<ChipActual
									label={chip}
									variant="outlined"
									onClick={() => handleClick(chip)}
								/>
							) : (
								<ChipBackground
									label={chip}
									onClick={() => handleClick(chip)}
								/>
							)
						)}
					</Stack>
				</div>
			</div>
		</div>
	);
}

export default NewEvent;
