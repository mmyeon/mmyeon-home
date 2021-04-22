import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import Learning from "./routes/Learning";
import PageNotFound from "./routes/PageNotFound";
import Project from "./routes/Project";

const DefaultRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/learning" component={Learning} />
        <Route path="/project" component={Project} />
        <Route path="/contact" component={Contact} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
};

export default DefaultRouter;
