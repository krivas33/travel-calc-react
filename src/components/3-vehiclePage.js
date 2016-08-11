/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');
var RouteHandler = require('react-router').RouteHandler;


var vehiclePage = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>What are you driving?</h1>
        <p>Select your vehicle.</p>
        <hr/>
        <p></p>
          <p class="lead">
            <Link to="vehicleInput" class="btn btn-primary btn-lg" role="button">Input your vehicle</Link>
          </p>
          <p class="lead">
            <Link to="goingPage" class="btn btn-primary btn-lg" role="button">Back</Link>
          </p>
        <p class="lead">
          <Link to="gasPage" class="btn btn-primary btn-lg" role="button">Final step!!</Link>
        </p>
      </div>
    );
  }
});

module.exports = vehiclePage;

//Popover button more more info.
