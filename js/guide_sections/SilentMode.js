var React = require('react');
var Link = require('react-router').Link;
var FluidImage = require('../components/FluidImage');

var SilentMode = React.createClass({

  render() {
    return (
      <div>
        <h3><span className="anchor" id="silent-mode"/>Silent mode <a href="#silent-mode">#</a></h3>

        <p>On pre-Lollipop devices, using the Silent mode is very straightforward, on the other
          hand, it's not so obvious on a Lollipop device. Here, I will explain how to simulate a
          Silent mode profile using the Priority mode of Lollipop devices.</p>

        <p>Let's create a silent profile example:</p>

        <FluidImage src="img/guide_silent_profile.png" width={350} height={366} />

        <p>In this case, I named it 'Silent' and I chose an icon that reminds me of it. Moreover,
          in your <i>Phone Settings > Sound {'\u0026'} Notifications > Interruptions</i>, you should
          keep everything off (you can manage that with Audio Profiles on other profiles):</p>

        <FluidImage src="img/guide_phone_interruptions.png" width={350} height={244} />

        <p>That should be enough to keep your phone Silent (apart from the Alarm). But,
          unfortunately, <b>there are some apps that skip the priority mode</b> on Android. One of
          them is Facebook Messenger, in this case, if developers don't change their apps, we
          should change the apps settings. For example, we can turn off the sound and the vibration
          on Facebook Messenger settings and allow it on some profiles using the Priority
          Notifications option. Check <Link to="guide" params={{section:
          'messenger_notifications'}}>Tips {'\u0026'} Tricks / Facebook Messenger notifications
          </Link> for more info on how to do that.</p>
      </div>
    );
  }

});

module.exports = SilentMode;