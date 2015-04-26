var React = require('react/addons');
var Toggle = require('material-ui').Toggle;
var FluidImage = require('../components/FluidImage');

var PriorityNotifications = React.createClass({

  render() {
    return (
      <div>
        <h3><a className="anchor" name="priority-notifications"/>Priority Notifications <a
          href="#priority-notifications">#</a></h3>
        <p>When your profile is set to Priority (or Silent in pre-Lollipop), you can control which
        notifications are allowed to sound and/or vibrate.</p>

        <h3><a className="anchor" name="notification-access"/>Notification access <a
          href="#notification-access">#</a></h3>
        <p>For Audio Profiles to access the notifications, there is a pre-requisite: User should
          allow it. You will see a red message on the top of your screen (when your are inside the
          Priority Notifications section) like this one:</p>

        <p className="notification-access">
          Notification access not enabled. TAP to enable.
        </p>

        <p>If you click it, you will be able to give Audio Profiles the proper permissions so it can
          detect when a notification comes in. <b>Be aware</b>: Without this permission, Priority
          Notifications won't work:</p>

        <FluidImage src="img/guide_notifications_access.png" width={350} height={117}/>

        <h3><a className="anchor" name="global-notifications"/>Global notifications <a
          href="#global-notifications">#</a></h3>
        <p></p>

        <h3><a className="anchor" name="app-exception"/>App exception <a
          href="#app-exception">#</a></h3>
        <p></p>

      </div>
    );
  }

});

module.exports = PriorityNotifications;