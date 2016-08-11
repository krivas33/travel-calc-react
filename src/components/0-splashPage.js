/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');


var splashPage = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Travel Calc</h1>
        <p>Calculate the cost of your trip using your car model, trip route and favorite gas station.</p>
        <hr/>
        <p>Traveler's Calculator</p>
        <p class="lead">
          <Link to="currentPositionPage" className="btn btn-primary btn-lg" role="button">Lets get started!</Link>
        </p>
      </div>
    );
  }
});

module.exports = splashPage;

//Popover button more more info.
