var React = require('react/addons');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Toolbar = require('./Toolbar');
var LeftNav = require('./LeftNav');
var Footer = require('./Footer');

var App = React.createClass({

  getInitialState(){
    return {leftNavOpen: false}
  },

  toggleSideBar(){
    this.setState({leftNavOpen: !this.state.leftNavOpen});
  },

  render() {
    return (
      <div id="container">
        <div className="wrapper">
          <Toolbar toggleSideBar={this.toggleSideBar}/>
          <LeftNav isOpen={this.state.leftNavOpen}/>
          <RouteHandler {...this.props.urlParams}/>
        </div>
        <Footer />
      </div>
    );
  }
});

module.exports = App;