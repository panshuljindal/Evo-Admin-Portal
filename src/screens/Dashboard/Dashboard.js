import "./Dashboard.css";
import { Link } from "react-router-dom";
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
	useEffect(() => {
		axios
			.get(
				`https://vit-events-app.herokuapp.com/events/club/${localStorage.getItem(
					"id"
				)}?type=all`,
				{
					headers: {
						"auth-token": localStorage.getItem("token"),
					},
				}
			)
			.then((res) => {
				console.log(res.data);
				setEvents(res.data.data);
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
				<div className="middle-dash">
					<div className="middle-top">
						<img
							src={PartnerBanner}
							alt="Partner"
							className="banner"
						></img>
					</div>
					<div className="middle-mid">
						<h3 className="title">Upcoming Events</h3>
						<div className="row">
							{events.map((i, ind) => {
								return (
									<Upcoming
										key={ind}
										id={ind}
										name={i.name}
										poster={i.poster}
										isPaid={i.isPaid}
										cost={i.eventCost}
										date={new Date(
											i.timestamp
										).toDateString()}
									/>
								);
							})}
						</div>
					</div>

					<div className="middle-bot">
						<div className="right-bottom">
							<h3 className="title">Most Viewed Events</h3>
							<Viewed />
							<Viewed />
							<Viewed />
						</div>

						<div className="left-bottom">
							<h3 className="title">Most Liked Events</h3>
							<Liked />
							<Liked />
							<Liked />
						</div>
					</div>
				</div>
				<div className="right-dash">
					<div className="notif-main">
						<p className="notif">Notifications</p>
						<div className="notif-text">
							Welcome to Evo.{" "}
							<Link to="/profile" exact>
								<span>Click Here</span>
							</Link>{" "}
							to complete your Profile
						</div>
						<Notif text="Blender 3D Workhop was the 3rd most viewed workshop this week"></Notif>
						<Notif text="Blender 3D Workhop was the 3rd most viewed workshop this week"></Notif>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
