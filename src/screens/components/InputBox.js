import React from "react";
import styled from "styled-components";

const InputBx = styled.input`
	width: 90%;
	height: auto;
	border: 2px solid #181818;
	background: #181818;
	box-sizing: border-box;
	border-radius: 16px;
	font-size: 1em;
	line-height: 175%;
	display: flex;
	align-items: center;
	justify-content: center;
	//   text-align: center;
	letter-spacing: 0.75px;
	color: #ffffff;
	margin: 0;
	margin-top: 2%;
	margin-bottom: 4%;
	box-shadow: none;
	transition: 0.5s;
	padding: 3%;

	&:focus {
		outline: none;
	}

	&::placeholder {
		font-size: 16px;
		line-height: 28px;
		/* identical to box height, or 175% */

		letter-spacing: 0.75px;

		color: #6e7191;
	}
	@media only screen and (max-width: 400px) {
		width: 250px;
		height: 50px;
		font-size: 0.9em;
	}
`;

const InputBox = (props) => {
	return <InputBx type={props.type} placeholder={props.place}></InputBx>;
};

export default InputBox;
