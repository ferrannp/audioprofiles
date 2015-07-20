var React = require('react/addons');
var classNames = require('classnames');
var SvgIcons = require('../components/SvgIcons');
var Material = require('material-ui');
var FlatButton = Material.FlatButton;
var Link = require('react-router').Link;
var FluidImage = require('../components/FluidImage');
var Colors = Material.Styles.Colors;

var FirstSteps = React.createClass({

  getInitialState() {
    return {mode: 'priority'}
  },

  priorityClick() {
    if (this.state.mode !== 'priority') {
      this.setState({mode: 'priority'});
    }
  },

  allClick() {
    if (this.state.mode !== 'all') {
      this.setState({mode: 'all'});
    }
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
        <h3><span className="anchor" id="new-profile"/>Adding a new profile <a
          href="#new-profile">#</a></h3>

        <p>In order to add a new profile, you must click the button on the bottom right corner
          of your screen. A profile name is mandatory, you can also add an icon for each profile
          by clicking: <SvgIcons.PhotoLibrary className={"text-icon"}/>.</p>

        <p>One of the most important parts comes now, you need to choose if your profile is a
          Priority one (Silent in pre-Lollipop) or an ALL one (Normal in pre-Lollipop). Click
          to see the description of each case.
          <p className="guide-buttons">
            <FlatButton label="Priority" onClick={this.priorityClick}
                        style={{color: this.state.mode == 'priority' ?
                        Colors.teal500 : Colors.minBlack }}/>
            <FlatButton label="All" onClick={this.allClick}
                        style={{color: this.state.mode == 'all' ?
                        Colors.teal500 : Colors.minBlack }}/>
          </p>

          <p>{this.state.mode == 'priority' ? priorityMode : allMode}</p>
        </p>

        <h3><span className="anchor" id="priority-mode-requirement"/>Priority mode requirement <a
          href="#priority-mode-requirement">#</a>
        </h3>

        <p>On Lollipop, when you activate the priority mode (creating a priority profile), yous
          should see a <SvgIcons.Star className={"text-icon"}/> in your system bar. In some phones,
          for Audio Profiles to be able to
          activate this mode, the user should activate it manually at least 1 time. How to do it?
          Just go to <i>Phone Settings > Sound {'\u0026'} Notifications > Interruptions</i> and
          change the first option to <i>Allow only priority interruptions</i>. Then changing it with
          Audio Profiles will work!</p>

        <p><b>Be aware</b>: If the above technique didn't work, your device requires an special
        permission to allow the app to change between modes. This is the same permission as for
        Priority Notifications. Check:  <Link
            to="guide" params={{section:'priority_notifications#notification-access'}}>
            Notification Access</Link>.</p>

        <h3><span className="anchor" id="media-volume"/>Media volume <a href="#media-volume">#</a>
        </h3>

        <p>Clicking the media volume icon <SvgIcons.MediaIcon className={"text-icon"}/> will allow
          you to decide if the profile can change the media volume or just leave it as it is.</p>

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