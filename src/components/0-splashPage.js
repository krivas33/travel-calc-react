/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');

var logoStyle = {
  width: '100%'
};

var splashPage = React.createClass({
  render: function() {
    return (
      <div id="splash-page">

        <div className="row">
          <h1 className="text-center">Travel Calculator</h1>
        </div>

        <div className="row">
          <img className="col-sm-8 offset-sm-2" src="images/map.png"/>
        </div>

        <div className="row">
          <p id="tagline" className="text-center col-sm-8 offset-sm-2">Calculate the cost of your trip using your car model, route and favorite gas station.</p>
        </div>

        <hr/>

        <div className="row">
          <p className="lead text-center">
            <Link id="start-button" to="currentPositionPage" className="btn btn-primary btn-lg" role="button" class="col-md-8">Get started</Link>
          </p>
        </div>

      </div>
    );
  }
});

module.exports = splashPage;
