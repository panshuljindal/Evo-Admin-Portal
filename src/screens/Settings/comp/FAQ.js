import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import "./style.css";

const data = {
	rows: [
		{
			title: "How to Change Event Timings?",
			content: `You need to navigate to the All Events page, then click on edit event. Make the change in the timings required and press the update button.`,
		},
		{
			title: "How to Change Event Timings?",
			content:
				"Hello, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.  ",
		},
		{
			title: "Curabitur laoreet, mauris vel blandit fringilla",
			content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
		},
		{
			title: "What is the package version",
			content: <p>current version is 1.2.1</p>,
		},
	],
};
const styles = {
	bgColor: "#",
	titleTextColor: "#FFFFFF",
	rowTitleColor: "#FFFFF",
	rowContentColor: "##F7F7FC",
	arrowColor: "#202020",
};
const config = {
	animate: true,
	// arrowIcon: "V",
	tabFocus: true,
};

function FAQ() {
	return (
		<div className="faq">
			<h3>F.A.Q</h3>
			<Faq data={data} styles={styles} config={config} />
		</div>
	);
}

export default FAQ;
