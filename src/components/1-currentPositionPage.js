/* globals require, module */
"use strict";
var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
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
          <a class="btn btn-primary btn-lg" href="#" role="button">Next step!</a>
        </p>
      </div>
    );
  }
});

module.exports = currentPositionPage;

//Popover button more more info.
