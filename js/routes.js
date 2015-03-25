var React = require('react/addons');
var App = require('./components/App');
var Guide = require('./components/Guide');
var Home = require('./components/Home');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var Redirect = Router.Redirect;

module.exports =
  <Route name="home" path="/" handler={App}>
    <Route name="guide" path="/guide/:section?" handler={Guide}/>
    <Route path="guide" handler={Guide}/>
    <DefaultRoute handler={Home}/>
    <Redirect path="/index.html" to="/"/>
  </Route>