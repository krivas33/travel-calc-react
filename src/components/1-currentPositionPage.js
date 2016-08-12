/* globals require, module */
"use strict";
var {Link} = require('react-router');
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var headerStyle = {
  background: "url('images/whereYouLocated.png') center / cover"
};

var currentPositionPage = React.createClass({
  render: function() {
    return (
      <div className="background hero">
        <div className="row image" style={headerStyle}>
          <h2 className="text-center">Where are you located?</h2>
        </div>

        <div className="row">
          <p id="description" className="text-center">Input or select your current locoation.</p>
        </div>

        <hr/>

        <div className="row">
          <p className="text-center lead">
            <Link className="nextButton btn btn-primary btn-lg" to="goingPage" role="button">Next step!</Link>
          </p>
        </div>
      </div>
    );
  }
});

module.exports = currentPositionPage;
