var React = require('react/addons');
var FluidImage = require('../components/FluidImage');

var Scheduler = React.createClass({

  render() {
    return (
      <div>
        <h3><span className="anchor" id="scheduler"/>Scheduler <a
          href="#scheduler">#</a></h3>
        <p>If you have a schedule (sleep, university, work, etc), you don't need to bother yourself
        everyday changing the profiles manually. You can set up your schedules with Audio Profiles
        for a time that can repeat any day of the week.</p>

        <p>Just click the add button on the bottom right corner of your screen and pick a time.
          Then, you can click the list item to expand it and choose which profile should activate at
          that time and also which days.</p>

        <p>The example below will activate a <i>Only Calls</i> profile every day at 00:00h. It also
          activates a <i>Vibrate</i> profile at 08:00h every weekday and a <i>Normal</i> profile at
          10:00h every weekend:
        </p>

        <FluidImage src="img/guide_scheduler.png" width={350} height={275}/>

        <h3><span className="anchor" id="inexact-scheduler"/>Inexact scheduler <a
          href="#inexact-scheduler">#</a></h3>

        <p><b>Notice</b>: Android <a
          href="http://developer.android.com/reference/android/app/AlarmManager.html"
          target="_blank">API</a> says: <i>alarm delivery is inexact: the OS will shift alarms in
          order to minimize wakeups and battery use.</i>. This means that if you have an schedule
          at 08:00, it could be activated at 08:01 or even at 08:02 (not a big price to pay for
          a better battery life!). In cases you need to be exact (like for a daily meeting), just
          plan the profile to change 5 minutes before and you will be good to go.</p>
      </div>
    );
  }

});

module.exports = Scheduler;