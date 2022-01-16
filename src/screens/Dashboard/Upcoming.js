import React from "react";
import "./Dashboard.css";
// import UpcomingIcon from "./assets/UpcomingIcon.png";
import calendar from "./assets/calendar.svg";
import rupee from "./assets/rupee.svg";
import like from "./assets/like.svg";

function Upcoming(props) {
	return (
		<div className="middle-card">
			<p>01</p>
			<div className="upcoming-icon">
				{/* <img src={UpcomingIcon} alt="event"></img> */}
			</div>
			<div className="details">
				<p>Event Name</p>
				<div className="sign-detail">
					<img src={calendar} alt="" className="detail-icon" />
					Jul 21 2021, 08:00PM
				</div>
				<div className="sign-detail">
					<img src={rupee} alt="" className="detail-icon" />
					Free
				</div>
				<div className="sign-detail">
					<img src={like} alt="" className="detail-icon" />
					120 Likes
				</div>
			</div>
		</div>
	);
}

export default Upcoming;
