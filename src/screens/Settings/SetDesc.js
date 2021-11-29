import React, { Component } from "react";
import Partner from "./comp/Partner";
import Connect from "./comp/Connect";
import Events from "./comp/Events";
import FAQ from "./comp/FAQ";
import Info from "./comp/Info";
import Security from "./comp/Security";
import Privacy from "./comp/Privacy";

class SetDesc extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	renderSettings(renderType) {
		if (renderType === "partner") {
			return (
				<div>
					<Partner />
				</div>
			);
		}
		if (renderType === "events") {
			return (
				<div>
					<Events></Events>
				</div>
			);
		}
		if (renderType === "security") {
			return (
				<div>
					<Security></Security>
				</div>
			);
		}
		if (renderType === "faq") {
			return (
				<div>
					<FAQ></FAQ>
				</div>
			);
		}
		if (renderType === "connect") {
			return (
				<div>
					<Connect></Connect>
				</div>
			);
		}
		if (renderType === "privacy") {
			return (
				<div>
					<Privacy></Privacy>
				</div>
			);
		}
		if (renderType === "info") {
			return (
				<div>
					<Info></Info>
				</div>
			);
		}
	}

	render() {
		return this.props.renderType ? (
			<div>{this.renderSettings(this.props.renderType)}</div>
		) : (
			<div>
				<Partner></Partner>
			</div>
		);
	}
}

export default SetDesc;
