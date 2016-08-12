/* globals require, module */
"use strict";
var {Link} = require('react-router');
var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var headerStyle = {
  background: "url('images/whereYouLocated.png') center / cover"
};

var showCheck = function(isSelected) {
  if (isSelected === true) {
    return <i className="material-icons checkmark col-sm-2">check</i>;
  }
};

var isSelectedClassName = function(isSelected) {
  if (isSelected === true) {
    return 'is-selected ';
  } else {
    return '';
  }
};

var currentPositionPage = React.createClass({
  render: function() {
    var locations = [
      {
        address: '310 S Harrington St',
        subtitle: 'Current location',
        symbol: 'location_on',
        isSelected: true
      },
      {
        address: '187 Toms Creek Rd',
        subtitle: 'Recent',
        symbol: 'favorite',
        isSelected: false
      },
      {
        address: '450 East Davie St',
        subtitle: 'Home',
        symbol: 'home',
        isSelected: false
      }
    ];

    return (
      <div id="current-position-page">
        <div className="row image hero" style={headerStyle}>
          <h2 className="text-center">Where are you located?</h2>
        </div>

        {
          locations.map(function(location) {
            return (
              <div className={isSelectedClassName(location.isSelected) + 'location row'}>
                <div className="col-sm-2">
                  <i className="material-icons">{location.symbol}</i>
                </div>
                <div className="col-sm-10 address">
                  <p>{location.address}</p>
                  <p className="subtitle">{location.subtitle}</p>
                </div>
                {showCheck(location.isSelected)}
              </div>
            );
          })
        }

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
