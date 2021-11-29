import React from "react";
import {
	CardWrapper,
	CardBody,
	CardImage,
	CardTitle,
	CardDesig,
	CardSocials,
	Cardlink,
} from "./TeamsElements";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

const TeamCard = (props) => {
	return (
		<CardWrapper>
			<CardImage src={props.pic} alt={"Picture of " + props.name} />
			<CardBody>
				<CardTitle>{props.name}</CardTitle>
				<CardDesig>{props.desig}</CardDesig>
				<CardSocials>
					<Cardlink href={"mailto: " + props.email}>
						<MdEmail />
					</Cardlink>
					<Cardlink href={props.git}>
						<FaGithub />
					</Cardlink>
					<Cardlink href={props.linked}>
						{" "}
						<IoLogoLinkedin />
					</Cardlink>
				</CardSocials>
			</CardBody>
		</CardWrapper>
	);
};

export default TeamCard;
