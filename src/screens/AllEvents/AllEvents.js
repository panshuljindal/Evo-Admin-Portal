import Navbar from "../components/Navbar";
import "./AllEvents.css";
import poster from "./assets/poster.svg";
import UpcomingEvent from "./UpcomingEvent";

function AllEvents() {
	return (
		<div>
			<div className="cont-dash">
				<div className="left"><Navbar /></div>

				<div className="middle-dash-events">
					<h3 className="event-heading">All Events (04)</h3>

					<div className="row">
						<UpcomingEvent/>
						<UpcomingEvent/>
					</div>

					<div className="row">
						<UpcomingEvent/>
						<UpcomingEvent/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AllEvents;
