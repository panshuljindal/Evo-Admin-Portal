import React from "react";
import "./style.css";
import delicon from "./assets/delicon.svg";
import statsicon from "./assets/statsicon.svg";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
function ManageEvent(props) {
	const history = useHistory()
	return (
		<div className="manage-event">
			<img src={props.data.poster} className="manageEventPoster" alt="Event Poster"></img>
			<div className="event-details">
				<p className="event-name">{props.data.name ? props.data.name : "Blender 3D Workshop"}</p>
				<p className="event-date">{props.date ? props.date : "29 February 2022"}</p>
			</div>
			<img src={statsicon} className="icon" alt="stats" onClick={() => {
				localStorage.setItem("updateEventID", JSON.stringify(props.data))
				console.log(localStorage.getItem("token"))
				history.push("/updateEvent")
			}}></img>
			<img src={delicon} className="icon" alt="delete" onClick={() => {
				axios.delete(`https://evo-backend-production.up.railway.app/events/delete/${props.data._id}`, {
					headers: {
						"auth-token": localStorage.getItem("token")
					}
				}).then(res => {
					history.push("/dashboard")
				}).catch(err => {

				})
			}}></img>
		</div>
	);
}

export default ManageEvent;
