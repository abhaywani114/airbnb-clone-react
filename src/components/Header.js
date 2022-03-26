import React from "react"
import HeaderImage from "../images/header_image.png"
export default function Header() {
	return (
		<header className="header-one">
					<img src={HeaderImage} className="header-image" />
				<h1 className="top-headding">Online Experiences</h1>
				<h3 className="top-sub-headding">Join unique interactive activities led by one-of-a-kind hosts--all without leaving home</h3>
		</header>
	);
}
