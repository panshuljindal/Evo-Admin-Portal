import Navbar from "../components/Navbar";
import "./AllEvents.css";
import poster from "./assets/poster.svg";
import UpcomingEvent from "./UpcomingEvent";
import Modal from "./Modal";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function AllEvents() {
	const [show, setShow] = useState(false);
	const [events, setEvents] = useState([]);
	useEffect(() => {
		axios
			.get(
				`https://evo-backend-production.up.railway.app/club/events/${localStorage.getItem(
					"id"
				)}`,
				{
					headers: {
						"auth-token": localStorage.getItem("token"),
					},
				}
			)
			.then((res) => {
				// setEvents(res.data.upcomingEvents);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	if (events.length == 0) {
		return (
			<div>
				<div className="cont-dash">
					<div className="left">
						<Navbar />
					</div>

					<div className="middle-dash-events">
						<h3 className="empty-events">No Events Found</h3>
					</div>
				</div>
			</div>);
	} else {
		return (
			<div>
				<div className="cont-dash">
					<div className="left">
						<Navbar />
					</div>

					<div className="middle-dash-events">
						<h3 className="event-heading">All Events (0{events.length})</h3>
						<Modal />
						<div className="row">
							<UpcomingEvent onClick={() => setShow(true)} />
							<Modal onClose={() => setShow(true)} show={show} />
							<UpcomingEvent />
						</div>

						<div className="row">
							<UpcomingEvent />
							<UpcomingEvent />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AllEvents;
