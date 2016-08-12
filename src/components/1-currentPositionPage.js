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
      <div id="current-position-page">
        <div className="row image hero" style={headerStyle}>
          <h2 className="text-center">Where are you located?</h2>
        </div>

        <hr/>

        <div className="row">
          <Link className="text-center nextButton btn btn-primary btn-lg" to="goingPage" role="button">
            <span>Next Step</span>
            <i className="material-icons md-36">arrow_forward</i>
          </Link>
        </div>

      </div>
    );
  }
});

module.exports = currentPositionPage;
