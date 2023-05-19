import React from "react";
import "./Modal.css";
import calendargrey from "./assets/calendargrey.svg";
import rupeegrey from "./assets/rupeegrey.svg";
import poster from "./assets/poster.svg";
import likes from "./assets/likes.svg";
import views from "./assets/views.svg";

const Modal = (props) => {
	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-left">
					<h4 className="modal-event">{props.name}</h4>
					<p>{props.info}</p>
					<div className="sign-detail">
						<img
							src={calendargrey}
							alt=""
							className="detail-icon"
						/>
						{props.date}
					</div>
					<div className="sign-detail">
						<img src={rupeegrey} alt="" className="detail-icon" />
						{props.price}
					</div>
					<div className="likes-views">
						<div className="likes">
							<img src={likes} alt="" className="detail-icon" />
							<p className="detail-padded"> &nbsp; {props.likes} likes</p>
						</div>
						<div className="views">
							<img src={views} alt="" className="detail-icon" />
							<p className="detail-padded">{props.views} Views</p>
						</div>
					</div>
				</div>
				<div className="modal-right">
					<div className="modal-poster">
						<img
							src={poster}
							alt="event poster"
							className="poster"
						></img>
					</div>
					<button className="edit-event">Edit Event Details</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
