import React from "react";
import "./Dashboard.css";
import GreyIcon from "./assets/GreyIcon.png";

function Liked(props) {
	return (
		<div className="bottom-card">
			<p>01</p>
			<div className="event-icon">
				<img src={GreyIcon} alt="event"></img>
			</div>
			<div className="details">
				<p className="big">Event Name</p>
				<p className="small">Likes: 200</p>
			</div>
		</div>
	);
}

export default Liked;
