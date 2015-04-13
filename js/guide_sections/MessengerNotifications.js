var React = require('react/addons');
var SvgIcons = require('../components/SvgIcons');
var Vibration = SvgIcons.Vibration;
var MoreButton = SvgIcons.MoreButton;


var MessengerNotifications = React.createClass({

  render() {
    return (
      <div>
        <h3 id="messenger">Facebook Messenger notifications <a href="#messenger">#</a></h3>

        <p>This app doesn't really respect Android Lollipop Priority mode, moreover, you might
          not want Messenger notifications when you are at home and in front of your computer but
          you may want them when you are outdoors. So, first of all, we need to go to Messenger
          settings and disable Vibrate and Sound (we can keep Light if we like):</p>
        <img src="img/guide_messenger_settings.png"/>

        <p>Then, we can create a profile called Outdoors (for example) which uses Priority mode
          (Silent for pre-Lollipop). Inside the profile, let's click into Priority Notifications
          and then, click on the bottom right corner button to add Facebook Messenger as an <b>App
            exception</b>.</p>

        <p>Click the item to expand it, we want Messenger to vibrate in this profile, we
          click the vibration button <Vibration className="text-icon"/> and it will show us:
          <i>Vibrate - App pattern</i>. In this case, we don't want App pattern... Because we turned
          off Messenger vibration, the App pattern will return nothing. Instead, let's click the
          more button <MoreButton className="text-icon"/>, select Custom vibration and choose
          whatever pattern we like. Final result should look similar to:</p>
        <img src="img/guide_priority_messenger.png"/>

        <p>In this way, you decide when and where Messenger notifications are allowed to bother
          you!</p>
      </div>
    );
  }

});

module.exports = MessengerNotifications;