var React = require('react');
var App = require('./components/App');
var Home = require('./components/Home');
var Guide = require('./components/Guide');
var Contact = require('./components/Contact');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

module.exports = (
  <Route name="home" path="/" handler={App}>
    <Route name="guide" path="/guide/:section?" handler={Guide}/>
    <Route path="guide" handler={Guide}/>
    <Route name="contact" handler={Contact}/>
    <DefaultRoute handler={Home}/>
    <Redirect path="/index.html" to="/"/>
  </Route>
);