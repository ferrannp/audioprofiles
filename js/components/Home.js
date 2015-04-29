var React = require('react/addons');

var Home = React.createClass({

  render() {
    return (
      <div className="sub-header">
        <div className="content">
          <div className="screen-container">
            <img src={'../img/screen1.png'} width="343" height="600" />
          </div>
          <div className="sub-header-right">
            <h2 className="sub-header-text">Audio Profiles</h2>
            <h3 className="sub-header-text">Full control of your calls and notifications on Android</h3>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;