var React = require('react/addons'),
  App = require('./components/App'),
  injectTapEventPlugin = require("react-tap-event-plugin"); //Needed for onTouchTap (material-ui)

injectTapEventPlugin();
React.render(<App />, document.getElementById('audioprofiles'));