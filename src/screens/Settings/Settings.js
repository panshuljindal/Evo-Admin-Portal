import React, { Component } from "react";
import "./Settings.css";
import Navbar from "../components/Navbar";
import SetDesc from "./SetDesc";

class Settings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			type: null,
		};
	}

	onPartners() {
		this.setState({ type: "partner" });
	}
	onEvent() {
		this.setState({ type: "events" });
	}
	onSecurity() {
		this.setState({ type: "security" });
	}
	onFAQ() {
		this.setState({ type: "faq" });
	}
	onConnect() {
		this.setState({ type: "connect" });
	}
	onPrivacy() {
		this.setState({ type: "privacy" });
	}
	onInfo() {
		this.setState({ type: "info" });
	}

	render() {
		return (
			<div className="set-container">
				<div className="left">{/* <Navbar /> */}</div>
				<div className="middle-set">
					<h3>Settings</h3>
					<div className="box">
						<ul>
							<li onClick={() => this.onPartners()}>
								Partners Program
							</li>
							<li onClick={() => this.onEvent()}>
								Manage Events
							</li>
							<li onClick={() => this.onSecurity()}>
								Account Security
							</li>
							<li onClick={() => this.onFAQ()}>F.A.Qs</li>
							<li onClick={() => this.onConnect()}>
								Connect With Us
							</li>
							<li onClick={() => this.onPrivacy()}>
								Privacy Policy
							</li>
							<li onClick={() => this.onInfo()}>
								Developer Info
							</li>
						</ul>
					</div>
				</div>
				<div className="right-set">
					<SetDesc renderType={this.state.type}></SetDesc>
				</div>
			</div>
		);
	}
}

export default Settings;
