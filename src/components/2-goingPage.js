/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');
var RouteHandler = require('react-router').RouteHandler;

var headerStyle = {
  background: "url('images/whereYouGoing.png') center / cover"
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

var goingPage = React.createClass({
  render: function() {
    var locations = [
      {
        address: '2 Washington St',
        subtitle: 'Search result',
        symbol: 'search',
        isSelected: true
      },
      {
        address: '450 East Davie St',
        subtitle: 'Home',
        symbol: 'search',
        isSelected: false
      }
    ];

    return (
      <div id="going-page">
        <div className="row image hero" style={headerStyle}>
          <h2 className="text-center">Where are you going?</h2>
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
          <Link className="text-center nextButton btn btn-primary btn-lg" to="vehiclePage" role="button">
            <span>Next Step</span>
            <i className="material-icons md-36">arrow_forward</i>
          </Link>
        </div>

      </div>
    );
  }
});

module.exports = goingPage;

//Popover button more more info.
