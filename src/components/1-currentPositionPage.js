/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');
var RouteHandler = require('react-router').RouteHandler;


var currentPositionPage = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Where are you located?</h1>
        <p>Input or select your current locoation.</p>
        <hr/>
        <p></p>
        <p class="lead">
          <Link to="goingPage" class="btn btn-primary btn-lg" role="button">Next step!</Link>
        </p>
      </div>
    );
  }
});

module.exports = currentPositionPage;

//Popover button more more info.
