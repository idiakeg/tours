import React from "react";

const NoTours = ({ handleRefresh }) => {
	return (
		<div className="no-tours">
			<h1>No Tours Left</h1>
			<button onClick={handleRefresh}>Refresh</button>
		</div>
	);
};

export default NoTours;
