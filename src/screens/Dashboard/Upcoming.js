import React from "react";
import "./Dashboard.css";
// import UpcomingIcon from "./assets/UpcomingIcon.png";
import calendar from "./assets/calendar.svg";
import rupee from "./assets/rupee.svg";
import like from "./assets/like.svg";

function Upcoming(props) {
	return (
		<div className="middle-card">
			<p>{props.id}</p>
			<div className="upcoming-icon">
				<img src={props.poster} alt="event"></img>
			</div>
			<div className="details">
				<p>{props.name}</p>
				<div className="sign-detail">
					<img src={calendar} alt="" className="detail-icon" />
					{props.date}
				</div>
				<div className="sign-detail">
					<img src={rupee} alt="" className="detail-icon" />
					{props.isPaid ? props.cost : "Free"}
				</div>
				<div className="sign-detail">
					<img src={like} alt="" className="detail-icon" />
					{props.likes}
				</div>
			</div>
		</div>
	);
}

export default Upcoming;
