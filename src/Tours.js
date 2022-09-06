import React, { useState } from "react";

const Tours = ({ tours, handleDelete }) => {
	const [readMore, setReadMore] = useState(false);
	// console.log(tours);
	return (
		<div className="tours">
			<header>
				<h1>Our Tours</h1>
				{/* <div className="border-btm"></div> */}
			</header>
			<section className="tours__container">
				{tours.map(({ id, image, info, name, price }) => (
					<div key={id} className="card">
						<div className="card-image">
							<img src={image} alt={name} />
						</div>
						<div className="card-info">
							<div className="info__header">
								<h3>{name}</h3>
								<span>${price}</span>
							</div>
							<p className="card-detail">
								{readMore ? info : ` ${info.substring(0, 200)} . . .`}
								<button onClick={() => setReadMore((prev) => !prev)}>
									{!readMore ? "Read more" : "Show less"}
								</button>
							</p>

							<button onClick={() => handleDelete(id)} className="card-btn">
								Not interested
							</button>
						</div>
					</div>
				))}
			</section>
		</div>
	);
};

export default Tours;
