import React, { Component } from "react";
import withRouter from "./withRouter";
import "./styles.scss";

import AuthWrapper from "./../../components/AuthWrapper";
import FormInput from "./../../components/forms/FormInput";
import Button from "./../../components/forms/Button";

import { auth } from "./../../firebase/utils";


const initialState = {
	email: "",
	errors: [],
};

class EmailPassword extends Component {
	constructor(props) {
		super(props);
		this.state = {
			...initialState,
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const { name, value } = e.target;

		this.setState({
			[name]: value,
		});
	}

	handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const { email } = this.state;
			const config = {
				url: "http://localhost:3000/login",
			};
			await auth
				.sendPasswordResetEmail(email, config)
				.then(() => {
					// console.log("Password Reset");
					this.props.navigate("/login");
				})
				.catch(() => {
					const err = ["Email not found. Please try again"];
					this.setState({
						errors: err,
					});
				});
		} catch (err) {
			console.log(err);
		}
	};

	render() {
		const { email, errors } = this.state;

		const configAuthWrapper = {
			headline: "Email Password",
		};
		return (
			<AuthWrapper {...configAuthWrapper}>
				<div className="formWrap">
					{errors.length > 0 && (
						<ul>
							{errors.map((e, index) => {
								return <li key={index}>{e}</li>;
							})}
						</ul>
					)}
					<form onSubmit={this.handleSubmit}>
						<FormInput
							type="email"
							name="email"
							value={email}
							placeholder="Email"
							onChange={this.handleChange}
						/>
						<Button type="submit">EmailPassword</Button>
					</form>
				</div>
			</AuthWrapper>
		);
	}
}

export default withRouter(EmailPassword);
