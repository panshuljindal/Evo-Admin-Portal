import React from "react";
import "./Dashboard.css";
// import GreyIcon from "./assets/GreyIcon.png";

function Liked(props) {
	return (
		<div className="bottom-card">
			<p>{props.id}</p>
			<div className="event-icon">
				{/* <img src={GreyIcon} alt="event"></img> */}
			</div>
			<div className="details">
				<p className="big">{props.name}</p>
				<p className="small">Likes: {props.likes}</p>
			</div>
		</div>
	);
}

export default Liked;
