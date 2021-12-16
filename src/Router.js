import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Resume from "./pages/Resume";

const DefaultRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />

        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default DefaultRouter;
