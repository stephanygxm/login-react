import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Me from "./components/Me/index";
import Music from "./components/Music/index";
import Login from "./components/Login/index";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/login" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/me" component={Me} />
      <Route path="/music" component={Music} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
