import "./Dashboard.css";
import { Link, useHistory } from "react-router-dom";
import Navbar from "../components/Navbar";
import PartnerBanner from "./assets/partner.svg";
import Notif from "./Notif";
import Upcoming from "./Upcoming";
import Liked from "./Liked";
import Viewed from "./Viewed";
import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
	const [events, setEvents] = useState([]);

	const [likedEvents, setlikedEvents] = useState([]);

	const [viewedEvents, setViewedEvents] = useState([]);
	const history = useHistory();
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
				setEvents(res.data.upcomingEvents.slice(0, 2));
				setlikedEvents(res.data.likedEvents.slice(0, 2));
				setViewedEvents(res.data.viewedEvents.slice(0, 2));
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);
	return (
			<div className="cont-dash">
				<div className="left">
					<Navbar />
				</div>
				<div className="middle-dash">
					<div className="middle-top">
						<img
							src={PartnerBanner}
							alt="Partner"
							className="banner"
							onClick={() => { history.push("/settings") }}
						></img>
					</div>
					<div className="middle-mid">
						<h3 className="title">Upcoming Events</h3>
						<div className="row">
							{
								events.map((i, ind) => {

									return (
										<Upcoming
											key={"0" + (ind + 1)}
											id={"0" + (ind + 1)}
											name={i.name}
											poster={i.poster}
											isPaid={i.isPaid}
											cost={i.eventCost}
											date={new Date(
												i.timestamp
											).toDateString()}
											likes={i.likes + " Likes"}
										/>
									);

								})

							}
						</div>
					</div>

					<div className="middle-bot">
						<div className="right-bottom">
							<h3 className="title">Most Viewed Events</h3>
							{viewedEvents.map((i, ind) => {
								return (
									<Viewed
										key={"0" + (ind + 1)}
										id={"0" + (ind + 1)}
										poster={i.poster}
										name={i.name}
										views={i.views}
									/>
								);
							})}
						</div>

						<div className="left-bottom">
							<h3 className="title">Most Liked Events</h3>
							{likedEvents.map((i, ind) => {
								return (
									<Liked
										key={"0" + (ind + 1)}
										id={"0" + (ind + 1)}
										poster={i.poster}
										name={i.name}
										likes={i.likes}
									/>
								);
							})}
						</div>
					</div>
				</div>
				<div className="right-dash">
					<div className="notif-main">
						<p className="notif">Notifications</p>
						<div className="notif-text">
						{likedEvents.map((i, ind) => {
								return (
									<div>
										{i.name} has {i.views} views.
										<br></br>
										{i.name} has {i.likes} views.

									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
	);
}

export default Dashboard;
