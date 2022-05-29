import React from "react";
import { Route, Routes } from "react-router-dom";
import "./default.scss";
import MainLayout from "./layouts/MainLayout";
import HomepageLayout from "./layouts/HomepageLayout";
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";

function App() {
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
					exact
					path="/registration"
					element={
						<MainLayout>
							<Registration />
						</MainLayout>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
