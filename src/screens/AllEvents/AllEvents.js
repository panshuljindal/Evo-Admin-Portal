import Navbar from "../components/Navbar";
import "./AllEvents.css";
import poster from "./assets/poster.svg";
import UpcomingEvent from "./UpcomingEvent";
import Modal from "./Modal";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function AllEvents() {
	const [show, setShow] = useState(true);
	const [events, setEvents] = useState([]);
	const toggleShow = () => {
		console.log("Show Changed")
		return setShow(!show)
	}
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
				setEvents(res.data.upcomingEvents);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<div>
			<div className="cont-dash">
				<div className="left">
					<Navbar />
				</div>

				<div className="middle-dash-events">
					<h3 className="event-heading">All Events (0{events.length})</h3>
					<div className="row">

						{events.map((i, ind) => {

							return (
								<UpcomingEvent
									name={i.name}
									info={i.info}
									date={new Date(
										i.timestamp
									).toDateString()}
									price={i.eventCost + " Rs"}
									poster={i.poster}
									onClick={() => setShow(true)}
								/>
							)
						})

						}
					</div>

				</div>
			</div>
		</div>
	);
}

export default AllEvents;
