/* globals require, module */
"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
 <Route name="app" path="/" handler={require('./components/app')}>
   <DefaultRoute handler={require('./components/0-splashPage')} />
   <Route name="currentPositionPage" handler={require('./components/1-currentPositionPage')} />
   <Route name="goingPage" handler={require('./components/2-goingPage')} />
   <Route name="vehiclePage" handler={require('./components/3-vehiclePage')} />
   <Route name="gasPage" handler={require('./components/4-gasPage')} />
   <Route name="summaryPage" handler={require('./components/5-summaryPage')} />
   <Route name="splashPage" handler={require('./components/0-splashPage')} />
   <Route name="vehicleInput" handler={require('./components/3.1-vehicleInput')} />
</Route>
);

module.exports = routes;
