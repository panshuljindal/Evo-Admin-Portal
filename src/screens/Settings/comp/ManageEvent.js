import React from "react";
import "./style.css";
import delicon from "./assets/delicon.svg";
import statsicon from "./assets/statsicon.svg";
import greyicon from "./assets/greyicon.png";
function ManageEvent({ name, date, image }) {
	return (
		<div className="manage-event">
			<img src={image ? image : greyicon}></img>
			<div className="event-details">
				<p className="event-name">{name ? name : "Blender 3D Workshop"}</p>
				<p className="event-date">{date ? date : "29 February 2022"}</p>
			</div>
			<img src={statsicon} className="icon" alt="stats"></img>
			<img src={delicon} className="icon" alt="delete" ></img>
		</div>
	);
}

export default ManageEvent;
