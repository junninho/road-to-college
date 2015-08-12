import App from "./App";
import React from "react";
import Router from "react-router";
import Welcome from "./ui/Welcome";
import NotFound from "./ui/NotFound";

var { Route, DefaultRoute, NotFoundRoute, RouteHandler } = Router;

var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={Welcome} />
        <Route name="welcome" handler={Welcome} />
        <NotFoundRoute handler={NotFound} />
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.querySelector("main"));
});
