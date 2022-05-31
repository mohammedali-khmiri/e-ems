import React from "react";
import LogoProduct from "./../../assets/product.png";
import "./style.scss";

const Directory = (props) => {
	return (
		<div className="directory">
			<div className="wrap">
				<div
					className="item"
					style={{
						backgroundImage: `url(${LogoProduct})`,
					}}
				>
					<a>Category 1</a>
				</div>
				<div
					className="item"
					style={{
						backgroundImage: `url(${LogoProduct})`,
					}}
				>
					<a>Category 2</a>
				</div>
			</div>
		</div>
	);
};

export default Directory;
