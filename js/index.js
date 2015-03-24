var React = require('react/addons');
var App = require('./components/App');
var Guide = require('./components/Guide');
var Home = require('./components/Home');
var injectTapEventPlugin = require("react-tap-event-plugin"); //Needed for onTouchTap (material-ui)
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

injectTapEventPlugin();

var routes = (
  <Route name="home" path="/" handler={App}>
    <Route name="guide" path="/guide" handler={Guide}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler/>, document.getElementById('audioprofiles'));
});