import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./screens/Dashboard/Dashboard";
import Settings from "./screens/Settings/Settings";
import AllEvents from "./screens/AllEvents/AllEvents";
import NewEvent from "./screens/NewEvent/NewEvent";
import EditProfile from "./screens/EditProfile/EditProfile";
import Navbar from "./screens/components/Navbar";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

function App() {
  return (
    <div>
      <Settings></Settings>
    </div>
    /*<BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Signup} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>*/
    /*<BrowserRouter>
      <div>
      <Loader
        type="Oval"
        color="#5F2EEA"
        height={50}
        width={50}
        timeout={10000} //3 secs
      />
        <Navbar />
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/profile" component={EditProfile} />
          <Route exact path="/all" component={AllEvents} />
          <Route exact path="/new" component={NewEvent} />
          <Route exact path="/settings" component={Settings} />
        </Switch>
      </div>
    </BrowserRouter>*/
  );
}

export default App;
