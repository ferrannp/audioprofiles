var React = require('react/addons');
var Material = require('material-ui');
var MUITabs = Material.Tabs;
var Tab = Material.Tab;
var Router = require('react-router');

var Tabs = React.createClass({
  mixins: [Router.Navigation],

  _onActive: function(tab){
    this.transitionTo(tab.props.route);
  },

  render() {
    return (
      <MUITabs tabWidth={150} initialSelectedIndex={null}>
        {/*prop in next version of tabs*/}
        <Tab label="Home" route="home" onActive={this._onActive} />
        <Tab label="Guide" route="guide" onActive={this._onActive} />
        <Tab label="Roadmap" />
        <Tab label="Contact" />
      </MUITabs>
    );
  }

});

module.exports = Tabs;