/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');
var RouteHandler = require('react-router').RouteHandler;


var goingPage = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Where are you going?</h1>
        <p>Input your destination's address.</p>
        <hr/>
        <p></p>
          <p class="lead">
            <Link to="currentPositionPage" class="btn btn-primary btn-lg" role="button">Back</Link>
          </p>
        <p class="lead">
          <Link to="vehiclePage" class="btn btn-primary btn-lg" role="button">Next step!</Link>
        </p>
      </div>
    );
  }
});

module.exports = goingPage;

//Popover button more more info.
