/*eslint-disable strict */ //Disabled check because we can't run strict mode. Need global vars.
/* globals require, module */

var React = require('react');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery');

var App = React.createClass({
  render: function() {

    return (
      <div>
          <div className="container-fluid">
            <RouteHandler/>
          </div>
      </div>
    );

  }
});

module.exports = App;
