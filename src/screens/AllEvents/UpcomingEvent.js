import "./AllEvents.css";
import calendargrey from "./assets/calendargrey.svg";
import rupeegrey from "./assets/rupeegrey.svg";
import { useHistory } from "react-router-dom";

function UpcomingEvent(props) {
	const history = useHistory()
	const handleSubmit = () => {
		localStorage.setItem("updateEventID", JSON.stringify(props.data))
		history.push("/updateEvent")
	}
	return (
		<div className="eventcard">
			<div className="info">
				<h4>{props.name}</h4>
				<p>{props.info}</p>
				<div className="sign-detail">
					<img src={calendargrey} alt="" className="detail-icon" />
					{props.date}
				</div>
				<div className="sign-detail">
					<img src={rupeegrey} alt="" className="detail-icon" />
					{props.price}
				</div>
				{/* <button className="edit-event" onClick={handleSubmit}>Edit Event Details</button> */}
			</div>
			<div className="event-poster">
				<img src={props.poster} alt="event poster" className="poster"></img>
			</div>
			<button className="edit-event" onClick={handleSubmit}>Edit Event Details</button>
		</div>
	);
}

export default UpcomingEvent;
