/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');
var RouteHandler = require('react-router').RouteHandler;


var vehicleInput = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Input your car specifications</h1>
        <p>Then save.</p>
        <hr/>
        <p></p>
          <p class="lead">
            <Link to="vehiclePage" class="btn btn-primary btn-lg" role="button">Cancel</Link>
          </p>
        <p class="lead">
          <Link to="vehiclePage" class="btn btn-primary btn-lg" role="button">Save</Link>
        </p>
      </div>
    );
  }
});

module.exports = vehicleInput;

//Popover button more more info.
