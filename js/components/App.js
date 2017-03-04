var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Toolbar = require('./Toolbar');
var LeftNav = require('./LeftNav');
var Footer = require('./Footer');

var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();
var CustomTheme = require('./CustomTheme');

var App = React.createClass({
  
  contextTypes: {
    router: React.PropTypes.func
  },
  
  getInitialState(){
    return {leftNavOpen: false}
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  },

  componentWillMount() {
    ThemeManager.setTheme(CustomTheme);
  },

  toggleSideBar(){
    this.setState({leftNavOpen: !this.state.leftNavOpen});
  },

  render() {
    var path = this.context.router.getLocation().getCurrentPath();
    return (
      <div id="container">
        <div className="wrapper">
          {path !== '/privacy' ? <Toolbar toggleSideBar={this.toggleSideBar}/> : null}
          <LeftNav isOpen={this.state.leftNavOpen}/>
          <div className="sub-header large"/>
          <RouteHandler {...this.props.urlParams}/>
        </div>
        <Footer />
      </div>
    );
  }
});

App.childContextTypes = {
  muiTheme: React.PropTypes.object
};

module.exports = App;