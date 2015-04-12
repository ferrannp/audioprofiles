var React = require('react/addons');
var classNames = require('classnames');
var SvgIcons = require('../components/SvgIcons');
var Material = require('material-ui');
var FlatButton = Material.FlatButton;

var FirstSteps = React.createClass({

  getInitialState() {
    return {mode: 'priority'}
  },

  priorityClick() {
    if(this.state.mode !== 'priority'){
      this.setState({mode: 'priority'});
    }
  },

  allClick() {
    if(this.state.mode !== 'all'){
      this.setState({mode: 'all'});
    }
  },

  render() {
    var priorityMode = <p><b>Priority mode</b>: Activates the Priority mode on a Lollipop device
      (star symbol) and the Silent mode on a pre-Lollipop device. This will allow you to use
      Priority Calls and Priority Notifications (click for more information and how to set
      up everything).</p>;

    var allMode = <p><b>All mode</b>: Activates the All mode on a Lollipop device and the Normal
      mode on a pre-Lollipop device. This will allow both calls and notifications to always
      interrupt (the notifications are depending on each app settings).</p>;

    return (
      <div>
        <h3 id="new-profile">Adding a new profile <a href="#new-profile">#</a></h3>
        <p>In order to add a new profile, you must click the button on the bottom right corner
          of your screen. A profile name is mandatory, you can also add an icon for each profile
          by clicking: <SvgIcons.PhotoLibrary className={"text-icon"}/>.</p>
        <p>One of the most important parts comes now, you need to choose if your profile is a
          Priority one (Silent in pre-Lollipop) or an ALL one (Normal in pre-Lollipop). Click
          to see the description of each case.
          <p className="guide-buttons">
            <FlatButton label="Priority" onClick={this.priorityClick}
                        className={classNames({'active': this.state.mode == 'priority'})}/>
            <FlatButton label="All" onClick={this.allClick}
                        className={classNames({'active': this.state.mode == 'all'})}/>
          </p>
          <p>{this.state.mode == 'priority' ? priorityMode:allMode}</p>
        </p>
        <div className="anchor">
          <h3 id="media-volume">Media volume <a href="#media-volume">#</a></h3>
          <p>Clicking the media volume icon <SvgIcons.MediaIcon className={"text-icon"}/> will allow
            you to decide if the profile can change the media volume or just leave it as it is.</p>
        </div>
      </div>
    );
  }

});

module.exports = FirstSteps;