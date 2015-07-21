var React = require('react/addons');
var Material = require('material-ui');
var MUITabs = Material.Tabs;
var Tab = Material.Tab;
var Router = require('react-router');
var Colors = Material.Styles.Colors;

_tabRoutes = {undefined: 0, "home": 0, "guide": 1, "contact": 2};

var Tabs = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  onActive: function(tab){
    this.context.router.transitionTo(tab.props.route);
  },

  render() {
    var index = _tabRoutes[this.context.router.getCurrentRoutes()[1].name];

    //TODO update selected index when material-ui supports it
    return (
      <MUITabs tabItemContainerStyle={{height: '56px'}}
               inkBarStyle={{backgroundColor: Colors.yellow500}} initialSelectedIndex={index}>
        <Tab  label="Home" route="home" onActive={this.onActive} style={{fontWeight: '400'}}/>
        <Tab label="Guide" route="guide" onActive={this.onActive} style={{fontWeight: '400'}}/>
        <Tab label="Contact" route="contact" onActive={this.onActive} style={{fontWeight: '400'}}/>
      </MUITabs>
    );
  }

});

module.exports = Tabs;