var React = require('react/addons');
var Toolbar = require('./Toolbar');
var LeftNav = require('./LeftNav');

var App = React.createClass({

  getInitialState(){
    return {leftNavOpen: false}
  },

  toggle(){
    this.setState({leftNavOpen: true});
  },

  render() {
    return (
      <div id="container">
        <LeftNav isOpen={this.state.leftNavOpen}/>
        <Toolbar />
        <div className="sub-header" onClick={this.toggle}>
          <div className="content">
            <div className="screen-container">
              <img src={'../img/screen1.png'} />
            </div>
            <div className="sub-header-right">
              <h2 className="sub-header-text">Audio Profiles</h2>
              <h3 className="sub-header-text">Full control of your calls and notifications on Android</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;