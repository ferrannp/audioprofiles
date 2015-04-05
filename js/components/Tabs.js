var React = require('react/addons');
var Material = require('material-ui');
var MUITabs = Material.Tabs;
var Tab = Material.Tab;
var Router = require('react-router');

_tabRoutes = {undefined: 0, "home": 0, "guide": 1, "roadmap": 2, "contact": 3};

var Tabs = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  _onActive: function(tab){
    this.context.router.transitionTo(tab.props.route);
  },

  render() {
    var index = _tabRoutes[this.context.router.getCurrentRoutes()[1].name];

    //TODO selectedIndex not working like this on material-ui 7.1.3
    return (
      <MUITabs tabWidth={150} initialSelectedIndex={index} selectedIndex={index}>
        <Tab label="Home" route="home" onActive={this._onActive} />
        <Tab label="Guide" route="guide" onActive={this._onActive} />
        <Tab label="Roadmap" />
        <Tab label="Contact" />
      </MUITabs>
    );
  }

});

module.exports = Tabs;