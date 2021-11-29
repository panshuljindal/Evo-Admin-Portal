import React from "react";
import styled from "styled-components";

const HollBtn = styled.button`
	width: 280px;
	height: 56px;
	border: 2px solid #5f2eea;
	background: rgba(95, 46, 234, 0.05);
	backdrop-filter: blur(14px);
	box-sizing: border-box;
	border-radius: 16px;
	font-weight: 600;
	font-size: 0.9em;
	line-height: 175%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	letter-spacing: 0.75px;
	color: #f7f7fc;
	margin: 0;
	cursor: pointer;
	box-shadow: none;

	@media only screen and (max-width: 400px) {
		width: 250px;
		height: 50px;
		font-size: 0.9em;
	}
`;

const HollowBtn = (props) => {
	return <HollBtn>{props.text}</HollBtn>;
};

export default HollowBtn;
