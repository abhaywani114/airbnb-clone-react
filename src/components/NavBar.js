import React from "react"
import AirbnbLogo from "../images/logo.png"

export default function NavBar() {
	return (
			<nav className="nav-bar">
				<img src={AirbnbLogo} className="nav-bar-logo" />
			</nav>
	);
} 
