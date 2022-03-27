import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


//Pages
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import Upcoming from "./pages/Upcoming";
import NotFound from "./pages/NotFound";
import Cards from "./pages/Cards";
import Sets from "./pages/Sets";
import Checks from "./pages/Checks";
import Carrier from "./pages/Carrier";
import Charts from "./pages/Charts";


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route path="/signup" component={SignUp} />
            <Route path="/weekly-tasks" component={Cards} />
            <Route path="/sets" component={Sets} />
            <Route path="/checks" component={Checks} />
            <Route path="/charts" component={Charts} />
            <Route path="/upcoming" component={Upcoming} />
            <Route path="/carrier" component={Carrier} />
            <Route path="*" component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
