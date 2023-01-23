import React from "react";
import "./Dashboard.css";
// import GreyIcon from "./assets/GreyIcon.png";

function Viewed(props) {
	return (
		<div className="bottom-card">
			<p>{props.id}</p>
			<div className="event-icon">
				<img src={props.poster} alt="event"></img>
			</div>
			<div className="details">
				<p className="big">{props.name}</p>
				<p className="small">Views: {props.views}</p>
			</div>
		</div>
	);
}

export default Viewed;
