/*eslint-disable strict */ //Disabled check because we can't run strict mode. Need global vars.

var React = require('react');
//var Header = require('./common/header');
//var RouteHandler = require('react-router').RouteHandler;
var $ = null;
var jQuery = null;
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
        <RouteHandler/>
        </div>
      </div>
    );
  }
});

module.exports = App;
