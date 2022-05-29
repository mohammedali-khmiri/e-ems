import React from "react";
import "./styles.scss";
import {Link} from "react-router-dom"
const Header = (props) => {
	return (
		<header className="header">
			<div className="wrap">
				<div className="logo">
					<Link to="/">
						<h1> EMS.</h1>
					</Link>
				
				</div>
				<div className="callToActions">
					<ul>
						<li>
							<Link to="/registration">
							Register
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};
export default Header;
