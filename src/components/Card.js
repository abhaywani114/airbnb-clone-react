import React from "react"

import Star from "../images/star.png"

export default function Card(props) {
	return (
		<div className="card-frame">
			<div className="photo-holder">
				<img src={require(`../images/${props.img}`)} />
				<span className="status-tag">SOLD OUT</span>
			</div>
			<div className="card-detail">
				<div className="card-detail--rating">
					<img src={Star} />
					<span className="card-detail--rating-value">{props.rating}</span>
					<span className="card-detail--rating-total">(6) &bull; </span>
					<span className="card-detail--rating-location">{props.country}</span>
				</div>
				<p className="card--title">{props.title}</p>
				<p className="card--rate">
					<span className="card--rate-sum">From ${props.price}</span>
					<span className="card--rate-pp"> / person</span>
				</p>
			</div>
		</div>
	);
}
