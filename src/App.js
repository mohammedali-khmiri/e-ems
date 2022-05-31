import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";
import { auth, handleUserProfile } from "./firebase/utils";
import { setCurrentUser } from "./redux/User/user.actions";
//Layouts
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
//pages
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Recovery from "./pages/Recovery";
import "./default.scss";

class App extends Component {
	authListener = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;

		this.authListener = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await handleUserProfile({ userAuth });
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}
	componentWillUnmount() {
		this.authListener();
	}
	render() {
		const { currentUser } = this.props;
		return (
			<div className="App">
				<Routes>
					<Route
						exact
						path="/"
						element={
							<HomepageLayout>
								<Homepage />
							</HomepageLayout>
						}
					/>
					<Route
						path="/registration"
						element={
							currentUser ? (
								<Navigate to="/" />
							) : (
								<HomepageLayout>
									<Registration />
								</HomepageLayout>
							)
						}
					/>
					<Route
						path="/login"
						element={
							currentUser ? (
								<Navigate to="/" />
							) : (
								<HomepageLayout>
									<Login />
								</HomepageLayout>
							)
						}
					/>
					<Route
						path="/recovery"
						element={
							<HomepageLayout>
								<Recovery />
							</HomepageLayout>
						}
					/>
				</Routes>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
