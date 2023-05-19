import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./screens/Dashboard/Dashboard";
import Settings from "./screens/Settings/Settings";
import AllEvents from "./screens/AllEvents/AllEvents";
import NewEvent from "./screens/NewEvent/NewEvent";
import EditProfile from "./screens/EditProfile/EditProfile";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Redirect } from "react-router-dom";
import UpdateEvent from "./screens/EditEvent/UpdateEvent";

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Landing} />
				<Route exact path="/register" component={Signup} />
				<Route exact path="/login" component={Login} />
				<Route
					exact
					path="/profile"
					component={() => {
						const token = localStorage.getItem("token");
						if (!token) {
							<Redirect to="/login" />;
						}
						return <EditProfile />;
					}}
				/>
				<Route
					exact
					path="/all"
					component={() => {
						const token = localStorage.getItem("token");
						if (!token) {
							<Redirect to="/login" />;
						}
						return <AllEvents />;
					}}
				/>
				<Route
					exact
					path="/updateEvent"
					component={() => {
						const token = localStorage.getItem("token");
						if (!token) {
							<Redirect to="/login" />;
						}
						return <UpdateEvent />;
					}}
				/>
				<Route
					exact
					path="/new"
					component={() => {
						const token = localStorage.getItem("token");
						if (!token) {
							<Redirect to="/login" />;
						}
						return <NewEvent />;
					}}
				/>
				<Route
					exact
					path="/dashboard"
					component={() => {
						const token = localStorage.getItem("token");
						if (!token) {
							<Redirect to="/login" />;
						}
						return <Dashboard />;
					}}
				/>
				<Route
					exact
					path="/settings"
					component={() => {
						const token = localStorage.getItem("token");
						if (!token) {
							<Redirect to="/login" />;
						}
						return <Settings />;
					}}
				/>
			</Switch>
		</BrowserRouter>
		// <BrowserRouter>
		//   <div>
		//   {/* <Loader
		//     type="Oval"
		//     color="#5F2EEA"
		//     height={50}
		//     width={50}
		//     timeout={10000} //3 secs
		//   /> */}
		//     <Switch>
	);
}

export default App;
