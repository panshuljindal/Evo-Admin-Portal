import "./AllEvents.css";
import poster from "./assets/poster.svg";
import calendargrey from "./assets/calendargrey.svg";
import rupeegrey from "./assets/rupeegrey.svg";

function UpcomingEvent(props) {
	return (
		<div className="eventcard">
			<div className="info">
				<h4>Blender 3D Workshop</h4>
				<p>Lorem ipsum dolor sit amet</p>
				<div className="sign-detail">
					<img src={calendargrey} alt="" className="detail-icon" />
					Jul 24 2021, 09:00 PM
				</div>
				<div className="sign-detail">
					<img src={rupeegrey} alt="" className="detail-icon" />
					900 Rs
				</div>
			</div>
			<div className="event-poster">
				<img src={poster} alt="event poster" className="poster"></img>
			</div>
		</div>
	);
}

export default UpcomingEvent;
