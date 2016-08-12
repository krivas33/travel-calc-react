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
      <div className="jumbotron">

        <div className="row">
          <h1 className="text-center">Travel Calc</h1>
        </div>

        <div className="row">
          <img className="col-sm-12" src="images/map.png"/>
        </div>

        <div className="row">
          <p className="text-center">Calculate the cost of your trip using your car model, trip route and favorite gas station.</p>
        </div>

        <hr/>

        <p className="text-center">Traveler's Calculator</p>

        <div className="row">
          <p className="lead text-center">
            <Link id="start-button" to="currentPositionPage" className="btn btn-primary btn-lg" role="button" class="col-md-8">Lets get started!</Link>
          </p>
        </div>

      </div>
    );
  }
});

module.exports = splashPage;
