import React from "react";
import { BrowserRouter, Router, Switch, Route } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Dashboard from "./screens/Dashboard/Dashboard";
import Settings from "./screens/Settings/Settings";
import AllEvents from "./screens/AllEvents/AllEvents";
import NewEvent from "./screens/NewEvent/NewEvent";
import EditProfile from "./screens/EditProfile/EditProfile";
import Navbar from "./screens/components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/profile" component={EditProfile} />
          <Route path="/all" component={AllEvents} />
          <Route path="/new" component={NewEvent} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
