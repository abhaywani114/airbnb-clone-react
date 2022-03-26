import React from "react"
import "./style.css"

import NavBar from "./components/NavBar"
import Header from "./components/Header"
import Card from "./components/Card"

import cardData from "./data.js"

export default function App() {
	const style_display_card = {
		"flex": "0 0 auto",
		"display": "flex",
		"flexWrap": "nowrap",
		"gap": "20px",
		"overflowY": "hidden",
		"overflowX": "auto",
		"padding":"20px"
	}

	const rendered_card_JSX = cardData.map((d) => {
		return (
				<Card 
					key={d.id}
					img={d.coverImg}
					rating={d.stats.rating}
					country={d.location}
					title={d.title}
					price={d.price}
				/>

		);
	});
	return (
			<>
				<NavBar />
				<Header />
				<div style={style_display_card} >
					{rendered_card_JSX}
				</div>
			</>
		);
}
