var React = require('react/addons');
var Toolbar = require('./Toolbar');

var App = React.createClass({
  render() {
    return (
      <div id="container">
        <Toolbar />
        <div className="subHeader">
          <div className="content">
            <div className="screenContainer">
              <img src={'../img/screen1.png'} />
            </div>
            <div className="subHeaderRight">
              <h2 className="subHeaderText">Audio Profiles</h2>
              <h3 className="subHeaderText">Full control of your calls and notifications on Android</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;