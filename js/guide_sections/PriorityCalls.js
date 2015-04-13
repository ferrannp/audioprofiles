var React = require('react/addons');
var Toggle = require('material-ui').Toggle;

var PriorityCalls = React.createClass({

  render() {
    return (
      <div>
        <h3 id="priority-calls">Priority calls <a href="#priority-calls">#</a></h3>

        <p>When your profile is set to Priority, you can control which calls should ring and/or
          vibrate. For example, you might want to allow <i>Unknown numbers</i> and <i>All contacts
          </i> during the night but not <i>Hidden numbers</i> (which usually are spam). In this
          case, you only need to turn on the last two:</p>

        <div className='toggle-center'>
          <Toggle label="Hidden numbers"/>
          <Toggle label="Unknown numbers" defaultToggled={true}/>
          <Toggle label="All contacts" defaultToggled={true}/>
        </div>

        <p><b>Careful</b>, if you control your calls with Audio Profiles, you should turn them off
          in your <i>Phone Settings > Sounds {'\u0026'} Notifications > Interruptions</i>:</p>

        <div className='toggle-center'>
          <Toggle label="Calls"/>
        </div>
        <p>If you don't do it, your call will ring double.</p>

        <h3 id="google-groups">Google groups <a href="#google-groups">#</a></h3>

        <p>We support Google groups with one limitation: Only per-account, this is a limitation of
          the <a href=
          "http://developer.android.com/reference/android/provider/ContactsContract.Groups.html"
          target="_blank">API</a>. Also, this option will have no effect if you select the
          <i>All
            contacts</i> option. So, how to use Google groups? You can add contacts into your groups
          using <a href="https://contacts.google.com" target="_blank">Google Contacts website</a> or
          also from your phone (from the contacts app): </p>
        <img src="img/guide_select_groups.png"/>

        <p>Then they will appear in your Priority calls profile settings when creating/editing one
          (if they have at least one member):
        </p>
        <img src="img/guide_google_groups.png"/>

        <h3 id="contact-exception">Contact exception <a href="#contact-exception">#</a></h3>

        <p>Contacts are always more priority than the other options. This means that you can
          activate the <i>All contacts</i> option but still you can deactivate a specific contact
          (so
          you can mute specific ones) or vice versa.
        </p>
      </div>
    );
  }

});

module.exports = PriorityCalls;