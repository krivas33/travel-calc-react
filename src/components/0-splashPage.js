/* globals require, module */
"use strict";
var React = require('react');
//var Router = require('react-router');
//var Link = Router.Link;

var splashPage = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Travel Calc</h1>
        <p>Calculate the cost of your trip using your car model, trip route and favorite gas station.</p>
        <hr/>
        <p>Traveler's Calculator</p>
        <p class="lead">
          <a class="btn btn-primary btn-lg" href="#" role="button">Lets get started!</a>
        </p>
      </div>
    );
  }
});

module.exports = splashPage;

//Popover button more more info.
