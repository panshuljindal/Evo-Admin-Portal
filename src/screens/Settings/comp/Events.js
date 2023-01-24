import "./style.css";
import ManageEvent from "./ManageEvent";
import axios from "axios";
import { useEffect, useState } from "react";

function Events() {

	const [events, setEvents] = useState([]);
	const [error, setError] = useState(false);

	useEffect(() => {
		axios.get(`https://evo-backend-production.up.railway.app/club/events/${localStorage.getItem(
			"id"
		)}`, {
			headers: {
				"auth-token": localStorage.getItem("token")
			}
		}).then(res => {
			setEvents(res.data.upcomingEvents)
		}).catch(err => {
			setError(true);
		})
	}, [])
	return (
		<div className="events">
			<h3>Manage Events</h3>
			<div className="active-event">
				<p className="manage-heading">Active</p>
				{!error && events.map((e) => {
					return <ManageEvent name={e.name} />
				})}
			</div>
			<div className="previous-event">
				<p className="manage-heading">Previous Events</p>
				{!error && events.map((e) => {
					return <ManageEvent name={e.name} />
				})}
			</div>
		</div>
	);
}

export default Events;
