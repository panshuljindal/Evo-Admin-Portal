import React from "react";
import styled from "styled-components";

const FillBtn = styled.button`
	width: 280px;
	height: 56px;
	border-radius: 16px;
	background-color: #5f2eea;
	font-weight: 600;
	font-size: 0.9em;
	line-height: 175%;
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	letter-spacing: 0.75px;
	color: #f7f7fc;
	border: none;
	margin: 0;
	cursor: pointer;
	box-shadow: none;

	@media only screen and (max-width: 400px) {
		width: 250px;
		height: 50px;
		font-size: 0.9em;
	}
`;

const FilledBtn = (props) => {
	return <FillBtn {...props}>{props.text}</FillBtn>;
};

export default FilledBtn;
