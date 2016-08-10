/* globals require, module */
$ = jQuery = require('jquery');
var React = require('react');
var SplashPage = require('./components/0-splashPage');
//var Router = require('react-router');
//var routes = require('./routes');

React.render(<SplashPage />, document.getElementById('app'));
