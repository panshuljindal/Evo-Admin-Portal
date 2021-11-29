import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as DashIcon } from "./icons/dash-icon.svg";
import { ReactComponent as EditIcon } from "./icons/edit.svg";
import { ReactComponent as AllIcon } from "./icons/all.svg";
import { ReactComponent as AddIcon } from "./icons/addevent.svg";
import { ReactComponent as SettingsIcon } from "./icons/settings.svg";
import { ReactComponent as IGIcon } from "./icons/ig.svg";
import { ReactComponent as FBIcon } from "./icons/fb.svg";
import { ReactComponent as TWIcon } from "./icons/tw.svg";
import { ReactComponent as LDIcon } from "./icons/ld.svg";
import { ReactComponent as MEIcon } from "./icons/me.svg";

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	handleExit(){
		localStorage.setItem("token", null);
		window.location.href = "/login"
	}
	render() {
		return (
			<div className="left-nav">
				<div className="nav-main">
					<div className="nav-logo">
						<NavLink to="/profile/" activeClassName="active">
							<div className="logo-circle" title="Edit Profile">
								<img
									src="https://i.postimg.cc/XYf7J1cX/adg-logo.png"
									alt="Logo"
								></img>
							</div>
						</NavLink>
						<div className="logo-edit" title="Edit Profile">
							<NavLink to="/profile/">
								<EditIcon />
							</NavLink>
						</div>
						<div className="nav-text">
							<p
								className="club-name"
								title="Some Club VITTTTTTT"
							>
								SomeClub VITTTTTTT
							</p>
							<p className="event-count">Total Events: 12</p>
						</div>
					</div>
					<div className="nav-menu">
						<div className="heading">MENU</div>
						<div className="links">
							<ul>
								<li>
									<NavLink
										exact
										to="/dashboard/"
										activeClassName="active"
									>
										<DashIcon className="clr" /> &ensp;
										Dashboard
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/all/"
										activeClassName="active"
									>
										<AllIcon /> &ensp; All Events
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/new/"
										activeClassName="active"
									>
										<AddIcon /> &ensp; Add New Event
									</NavLink>
								</li>
								<li>
									<NavLink
										to="/settings/"
										activeClassName="active"
									>
										<SettingsIcon /> &ensp; Settings
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<div className="nav-social">
						<div className="heading">SOCIALS</div>
						<div className="links">
							<ul>
								<li title="Instagram">
									<IGIcon /> &ensp; <p> @adgvnnnn</p>
								</li>
								<li title="Facebook">
									<FBIcon /> &ensp; <p> @adgvitnnnn</p>
								</li>
								<li title="Twitter">
									<TWIcon /> &ensp; <p> $adgnnnnn</p>
								</li>
								<li title="Linkedin">
									<LDIcon /> &ensp; <p> @adgvitnnnnnn</p>
								</li>
								<li title="Medium">
									<MEIcon /> &ensp;{" "}
									<p> @adgvit202111nnnnnnnnnnnnnnn</p>
								</li>
							</ul>
						</div>
					</div>
					<div className="nav-out" onClick={this.handleExit} >Sign Out</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
