/* globals require, module */
"use strict";
var React = require('react');
var {Link} = require('react-router');
var RouteHandler = require('react-router').RouteHandler;

var headerStyle = {
  background: "url('images/whereYouGas.jpg') center / cover"
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

var gasPage = React.createClass({
  render: function() {
    var stations = [
      {
        name: 'Shell',
        price: '$4.29',
        isSelected: true
      },
      {
        name: 'Sheetz',
        price: '$2.09',
        isSelected: false
      }
    ];

    return (
      <div id="gas-page">
        <div className="row image hero" style={headerStyle}>
          <h2 className="text-center">What gas station do you frequent?</h2>
        </div>

        {
          stations.map(function(station) {
            return (
              <div className={isSelectedClassName(station.isSelected) + 'station row'}>
                <div className="col-sm-2">
                  <i className="material-icons">local_gas_station</i>
                </div>
                <div className="col-sm-10 info">
                  <p>{station.name}</p>
                  <p className="subtitle">{station.price}</p>
                </div>
                {showCheck(station.isSelected)}
              </div>
            );
          })
        }

        <div className="row">
          <Link className="text-center nextButton btn btn-primary btn-lg" to="summaryPage" role="button">
            <span>Next Step</span>
            <i className="material-icons md-36">arrow_forward</i>
          </Link>
        </div>

      </div>
    );
  }
});

module.exports = gasPage;

//Popover button more more info.
