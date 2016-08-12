/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');
var RouteHandler = require('react-router').RouteHandler;

var headerStyle = {
  background: "url('images/whatYouDriving.jpg') center / cover"
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


var vehiclePage = React.createClass({
  render: function() {
    var cars = [
      {
        model: 'Escape - 2016 2.5L',
        make: 'Ford',
        isSelected: true
      },
      {
        model: 'Patriot - 2009 2.0L',
        make: 'Jeep',
        isSelected: false
      }
    ];

    return (
      <div id="vehicle-page">
        <div className="row image hero" style={headerStyle}>
          <h2 className="text-center">What are you driving?</h2>
        </div>

        {
          cars.map(function(car) {
            return (
              <div className={isSelectedClassName(car.isSelected) + 'car row'}>
                <div className="col-sm-2">
                  <i className="material-icons">directions_car</i>
                </div>
                <div className="col-sm-10 address">
                  <p>{car.model}</p>
                  <p className="subtitle">{car.make}</p>
                </div>
                {showCheck(car.isSelected)}
              </div>
            );
          })
        }

        <div className="row">
          <Link className="text-center nextButton btn btn-primary btn-lg" to="gasPage" role="button">
            <span>Next Step</span>
            <i className="material-icons md-36">arrow_forward</i>
          </Link>
        </div>

        <Link className="fab" to="vehicleInput">
          <i className="material-icons md-36">add</i>
        </Link>

      </div>
    );
  }
});

module.exports = vehiclePage;

//Popover button more more info.
