import React, { Component } from "react";
import TeamCard from "./Team";
import "./style.css";

class Info extends Component {
	constructor(props) {
		super(props);
		this.state = {
			teams: [
				{
					key: "1",
					name: "Anmol Bansal",
					desig: "Web Developer",
					pic: "assets/anmol.jpg",
					linked: "https://www.linkedin.com/in/anmolbansal7/",
					git: "https://github.com/anmolbansal7",
					email: "abanmolbansal5@gmail.com",
				},
				{
					key: "2",
					name: "Vidushi Gupta",
					desig: "Web Developer",
					pic: "assets/vidushi.png",
					linked: "https://www.linkedin.com/in/vidushiguptaa/",
					git: "https://github.com/vidushig08",
					email: "vidushig08@gmail.com",
				},
				{
					key: "3",
					name: "Gokul Nair",
					desig: "Web Developer",
					pic: "assets/gokul.jpg",
					linked: "https://www.linkedin.com/in/gokul-r-nair/",
					git: "https://github.com/gokulnair2001",
					email: "gokulnair.2001@gmail.com",
				},
				{
					key: "4",
					name: "Nikhil Parashar",
					desig: "Web Developer",
					pic: "assets/nikhil.jpg",
					linked: "https://www.linkedin.com/in/nikhil-kumar-p-51794013a",
					git: "https://github.com/NikhilKP631197",
					email: "nikhil631197@gmail.com",
				},
			],
		};
	}
	render() {
		const teamCard = this.state.teams.map((team) => {
			return (
				//key helps make unique
				<div>
					<TeamCard
						key={team.key}
						name={team.name}
						desig={team.desig}
						pic={team.pic}
						linked={team.linked}
						git={team.git}
						email={team.email}
					/>
				</div>
			);
		});

		return (
			<div className="info">
				<h3>Developer Info</h3>
				<div className="card-main">{teamCard}</div>
			</div>
		);
	}
}

export default Info;
