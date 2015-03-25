var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Toolbar = require('./Toolbar');

var App = React.createClass({

  render() {
    return (
      <div id="container">
        <Toolbar />
        <RouteHandler {...this.props.urlParams}/>
      </div>
    );
  }
});

module.exports = App;