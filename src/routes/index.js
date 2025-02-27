import React from "react";
import { Switch, Route } from "react-router-dom";
import Default from "./Default";
import FourOhFour from "./FourOhFour";
import Page from "./Page";
import Project from "./Project";

export default ({ location }) => (
  <Switch location={location}>
    <Route key="default" path="/" component={Default} exact />
    <Route key="page" path="/projects/:name" component={Project} />
    <Route key="page" path="/:name" component={Page} />
    <Route key="404" path="/" component={FourOhFour} />
  </Switch>
);
