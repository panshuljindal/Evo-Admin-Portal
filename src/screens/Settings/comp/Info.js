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
					name: "Panshul Jindal",
					desig: "Developer",
					pic: "assets/panshul.png",
					linked: "https://www.linkedin.com/in/panshul-jindal-392746199/",
					git: "https://github.com/panshuljindal",
					email: "panshuljindal@gmail.com",
				}

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
