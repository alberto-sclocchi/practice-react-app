import React from "react";

export default function InfoBox(props) {
	console.log({ props });

	return (
		<div className={props.containerClass}>
			<img src={props.img} />
			<h3>{props.title}</h3>
			<p>{props.info}</p>
		</div>
	);
}
