var React = require('react/addons');
var Toggle = require('material-ui').Toggle;
var FluidImage = require('../components/FluidImage');
var SvgIcons = require('../components/SvgIcons');
var MoreButton = SvgIcons.MoreButton;

var PriorityNotifications = React.createClass({

  render() {
    return (
      <div>
        <h3><span className="anchor" id="priority-notifications"/>Priority Notifications <a
          href="#priority-notifications">#</a></h3>

        <p>When your profile is set to Priority (or Silent in pre-Lollipop), you can control which
          notifications are allowed to sound and/or vibrate.</p>

        <h3><span className="anchor" id="notification-access"/>Notification access <a
          href="#notification-access">#</a></h3>

        <p>For Audio Profiles to access the notifications, there is a pre-requisite: User should
          allow it. You will see a red message on the top of your screen (when your are inside the
          Priority Notifications section) like this one:</p>

        <p className="notification-access">
          Notification access not enabled. TAP to enable.
        </p>

        <p>If you click it, you will be able to give Audio Profiles the proper permissions so it can
          detect when a notification comes in. <b>Be aware</b>: Without this permission, Priority
          Notifications won't work.</p>

        <h3><span className="anchor" id="global-notifications"/>Global notifications <a
          href="#global-notifications">#</a></h3>

        <p>These settings will affect all your notifications. For example, I want my phone to
          vibrate when a notification comes in but only when my screen is off. Then I can do:</p>

        <div className='toggle-center'>
          <Toggle label="Allow sound (6)"/>
          <Toggle label="Allow vibration" defaultToggled={true}/>
          <Toggle label="Only when Screen is Off" defaultToggled={true}/>
        </div>

        <p>Notice that the number (6) that appears after <i>Allow sound</i> is the volume you
          chose as a <i>Ring volume</i> (previous screen of Add/Edit a profile). Moreover, allowing
          a sound or a vibration here will use the <a href="#app-tone-app-vibrate-pattern">
            App tone / App vibrate pattern</a> (respectively).
        </p>

        <h3><span className="anchor" id="app-exception"/>App exception <a
          href="#app-exception">#</a></h3>

        <p>You can add any app you want here and it will override the global notification for it.
          To add an app, click the button on the bottom right corner of your screen.
          Then, you can click the app to expand its options. I want, for example, Whatsapp to sound
          with a custom volume and a custom ringtone and to vibrate. It would look like:
        </p>

        <FluidImage src="img/guide_app_exception.png" width={350} height={169}/>

        <p>To change the volume and the ringtone, you must click the
          <MoreButton className="text-icon"/> button to see the options.
        </p>

        <h4><span className="anchor" id="app-tone-app-vibrate-pattern"/>
          What is App tone / App vibrate pattern? <a
          href="#app-tone-app-vibrate-pattern">#</a></h4>

        <p>You don't need to use custom ringtone or custom vibration if you don't want, usually your
          apps have their own settings (the ringtone and the vibration). For
          example, you can configure the ringtone (App tone) in Whatsapp settings and also its
          pattern to Short (App vibrate pattern). See:</p>

        <FluidImage src="img/guide_whatsapp_settings.png" width={350} height={239}/>

        <p>Then, Audio Profiles will use those values in any profile you add the exception without
          custom values (and for Global notifications). <b>Caution</b>: if for example, you
          deactivate the vibration in Whatsapp settings, <i>App vibrate pattern </i>will do nothing
          for this app because, of course, it's empty (the same for <i>App tone</i>).</p>

      </div>
    );
  }

});

module.exports = PriorityNotifications;