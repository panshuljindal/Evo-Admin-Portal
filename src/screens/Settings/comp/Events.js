import "./style.css";
import ManageEvent from "./ManageEvent";
function Events() {
	return (
		<div className="events">
			<h3>Manage Events</h3>
			<div className="active-event">
				<p className="manage-heading">Active</p>
				<ManageEvent/>
				<ManageEvent/>
            </div>
            <div className="previous-event">
				<p className="manage-heading">Previous Events</p>
				<ManageEvent/>
				<ManageEvent/>
            </div>
		</div>
	);
}

export default Events;
