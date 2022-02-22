import Navbar from "../components/Navbar";
import "./AllEvents.css";
import poster from "./assets/poster.svg";
import UpcomingEvent from "./UpcomingEvent";
import Modal from "./Modal";
import React, { useState } from "react";

function AllEvents() {
	const [show, setShow] = useState(false);
	return (
		<div>
			<div className="cont-dash">
				<div className="left">
					<Navbar />
				</div>

				<div className="middle-dash-events">
					<h3 className="event-heading">All Events (04)</h3>
					<Modal />
					<div className="row">
						<UpcomingEvent onClick={() => setShow(true)} />
						<Modal onClose={() => setShow(false)} show={show} />
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

export default AllEvents;
