/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');
var RouteHandler = require('react-router').RouteHandler;


var summaryPage = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>You summary!</h1>
        <p></p>
        <hr/>
        <p></p>
        <p class="lead">
          <Link to="splashPage" class="btn btn-primary btn-lg" role="button">New calculation</Link>
        </p>
      </div>
    );
  }
});

module.exports = summaryPage;

//Popover button more more info.
