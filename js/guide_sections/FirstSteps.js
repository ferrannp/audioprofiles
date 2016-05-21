var React = require('react');
var Material = require('material-ui');
var FlatButton = Material.FlatButton;
var Link = require('react-router').Link;
var FluidImage = require('../components/FluidImage');
var Colors = Material.Styles.Colors;

var FirstSteps = React.createClass({

  getInitialState() {
    return {mode: 'priority'}
  },

  shouldComponentUpdate (nextProps, nextState){
    return nextState.mode !== this.state.mode;
  },

  render() {
    var priorityMode = <p><b>Priority mode</b>: Activates the Priority mode on a Lollipop device
      (star symbol) and the Silent mode on a pre-Lollipop device. This will allow you to use <Link
        to="guide" params={{section:'priority_calls'}}>Priority Calls</Link> and <Link
        to="guide" params={{section:'priority_notifications'}}>Priority Notifications</Link> (click
      for more information and how to set
      up everything).</p>;

    var allMode = <p><b>All mode</b>: Activates the All mode on a Lollipop device and the Normal
      mode on a pre-Lollipop device. This will allow both calls and notifications to always
      interrupt (the notifications are depending on each app settings).</p>;

    return (
      <div>
        <h3><span className="anchor" id="priority_vs_all"/>First Steps: Priority profile vs All
          profile <a href="#priority_vs_all">#</a></h3>

        <p>In order to add a new profile, you must click the button on the bottom right corner
          of your screen. A profile name is mandatory, you can also add an icon for each profile.
        </p>
        <FluidImage src="img/guide_new_profile.png" width={350} height={135}/>

        <p>One of the most important parts comes now, you need to choose if your profile is a
          Priority one (Silent in pre-Lollipop) or an ALL one (Normal in pre-Lollipop). Click
          to see the description of each case.
          <p className="guide-buttons">
            <FlatButton label="Priority" onClick={() => this.setState({mode: 'priority'})}
                        style={{color: this.state.mode == 'priority' ?
                        Colors.teal500 : Colors.minBlack }}/>
            <FlatButton label="All" onClick={() => this.setState({mode: 'all'})}
                        style={{color: this.state.mode == 'all' ?
                        Colors.teal500 : Colors.minBlack }}/>
          </p>

          <p>{this.state.mode == 'priority' ? priorityMode : allMode}</p>
        </p>

        <h3><span className="anchor" id="priority-mode-requirement"/>Priority mode requirement <a
          href="#priority-mode-requirement">#</a>
        </h3>

        <p>On Lollipop, when you activate the priority mode (creating a priority profile), you
          should see a star icon in your system bar. In order to change from All
          to Priority and vice versa, Audio Profiles needs a special permission (see <Link
            to="guide" params={{section:'priority_notifications#notification-access'}}>
            Notification Access</Link>). You basically need to check the app on <i>Phone
            Settings > Sound {'\u0026'} Notifications > Notification access</i>.</p>
        <FluidImage src="img/guide_notification_access.png" width={350} height={141}/>

        <h3><span className="anchor" id="media-volume"/>Media volume <a href="#media-volume">#</a>
        </h3>

        <p>Clicking the media volume icon will allow you to decide if the profile can change
          that volume or just leave it as it is.</p>
        <FluidImage src="img/guide_media_volume.png" width={350} height={67}/>

        <h3><span className="anchor" id="default_ringtones"/>Default ringtones <a
          href="#default_ringtones">#</a></h3>

        <p>You can choose a default ringtone for your phone calls, notifications and the alarm for
          each profile. However, you can also choose Default Ringtone on the top of the picker:</p>
        <FluidImage src="img/guide_default_ringtones.png" width={350} height={152}/>

        <p>This means that it will use whatever rigntone you choose in your phone settings (usually
          in <i>Settings > Sound {'\u0026'} Notifications</i>).</p>
      </div>
    );
  }

});

module.exports = FirstSteps;