/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');
var RouteHandler = require('react-router').RouteHandler;


var gasPage = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Which gas station do you frequent?</h1>
        <p>Select desired brand.</p>
        <hr/>
        <p></p>
          <p class="lead">
            <Link to="vehiclePage" class="btn btn-primary btn-lg" role="button">Back</Link>
          </p>
        <p class="lead">
          <Link to="summaryPage" class="btn btn-primary btn-lg" role="button">See your results</Link>
        </p>
      </div>
    );
  }
});

module.exports = gasPage;

//Popover button more more info.
