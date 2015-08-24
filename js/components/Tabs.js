var React = require('react/addons');
var Material = require('material-ui');
var MUITabs = Material.Tabs;
var Tab = Material.Tab;
var Router = require('react-router');
var Colors = Material.Styles.Colors;

var Tabs = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  onActive(tab) {
    //Sub-route of the Guide and user re-clicks the tab (handleTabsChange won't be fired)
    if(this.context.router.getCurrentParams().section !== undefined){
      this.context.router.transitionTo(tab.props.route);
    }
  },

  handleTabsChange (value, e, tab){
    this.context.router.transitionTo(tab.props.route);
  },

  render() {
    var route = this.context.router.getCurrentRoutes()[1].name;
    if(!route){
      route = 'home';
    }

    return (
      <MUITabs tabItemContainerStyle={{height: '56px'}}
               inkBarStyle={{backgroundColor: Colors.yellow500}}
               valueLink={{value: route,
               requestChange: this.handleTabsChange}}>
        <Tab label="Home" route="home" value="home" style={{fontWeight: '400'}} />
        <Tab label="Guide" route="guide" value="guide" style={{fontWeight: '400'}}
             onActive={this.onActive}/>
        <Tab label="Contact" route="contact" value="contact" style={{fontWeight: '400'}}/>
      </MUITabs>
    );
  }

});

module.exports = Tabs;