var React = require('react/addons');
var Toggle = require('material-ui').Toggle;

var PriorityNotifications = React.createClass({

  render() {
    return (
      <div>
        <h3><a className="anchor" name="priority-notifications"/>Priority Notifications <a
          href="#priority-notifications">#</a></h3>
      </div>
    );
  }

});

module.exports = PriorityNotifications;