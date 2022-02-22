import React, { useState } from "react";
import "./Modal.css";
import calendargrey from "./assets/calendargrey.svg";
import rupeegrey from "./assets/rupeegrey.svg";
import poster from "./assets/poster.svg";
import close from "./assets/close.svg";
import likes from "./assets/likes.svg";
import views from "./assets/views.svg";

const Modal = (props) => {
	if (!props.show) {
		return null;
	}
	return (
		<div className="modal">
			<div className="modal-content">
				<div className="modal-left">
					<h4 className="modal-event">Blender 3D Workshop</h4>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Explicabo similique voluptatem dolore architecto
						aperiam, reiciendis vel porro eligendi beatae obcaecati
						dolorum quos perferendis rerum. Omnis ullam qui a id
						aut.
					</p>
					<div className="sign-detail">
						<img
							src={calendargrey}
							alt=""
							className="detail-icon"
						/>
						Jul 24 2021, 09:00 PM
					</div>
					<div className="sign-detail">
						<img src={rupeegrey} alt="" className="detail-icon" />
						900 Rs
					</div>
					<div className="likes-views">
						<div className="likes">
							<img src={likes} alt="" className="detail-icon" />
							<p className="detail-padded"> &nbsp; 140 likes</p>
						</div>
						<div className="views">
							<img src={views} alt="" className="detail-icon" />
							<p className="detail-padded">140 Views</p>
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
				<div className="modal-cross">
					<button onClick={props.onClose}>
						<img src={close} alt="" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
