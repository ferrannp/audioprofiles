var React = require('react');
var injectTapEventPlugin = require("react-tap-event-plugin"); //Needed for onTouchTap (material-ui)
var routes = require('./routes');
var Router = require('react-router');

injectTapEventPlugin();

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler urlParams={state.params} />, document.getElementById('audioprofiles'));
});