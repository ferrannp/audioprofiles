var React = require('react/addons');
var FluidImage = require('../components/FluidImage');
var Link = require('react-router').Link;

var RingtonesAndContacts = React.createClass({

  render() {
    return (
      <div>
        <h3><span className="anchor" id="ringtones_contacts"/>Ringtones {'\u0026'} Contacts <a
          href="#ringtones_contacts">#</a></h3>
        <p>In this section you will be able to set up different ringtones for each kind of user and
          also be able to reject specific calls.</p>

        <h3><span className="anchor" id="hidden_unknown"/>Hidden {'\u0026'} Unknown <a
          href="#hidden_unknown">#</a></h3>

        <p>
          The Priority mode of Audio Profiles (or Silent in pre-Lollipop) allows you to select a
          specific ringtone for hidden and unknown numbers. This is an interesting feature to
          identify what kind of user is calling you. <b>Be aware</b>: It will only works within a
          Priority profile that is using <Link to="guide" params={{section:'priority_calls'}}>
          Priority Calls</Link>. Just tapping on each option you can set it up:
        </p>

        <FluidImage src="img/guide_hidden_unknown.png" width={350} height={169}/>

        <h3><span className="anchor" id="specific_contacts"/>Specific contacts (always available) <a
          href="#specific_contacts">#</a></h3>
        <p>First question: <i>What is always available?</i>: It means that what this is acutally
          doing is editing your contact the same way you would do it in yout Contacts app (if you
          change it there it will also change here!). Therefore, adding a custom ringtone for a
          contact or rejecting any of them will always work in any kind of profile (priority or
          not). So you can do something like:
        </p>

        <FluidImage src="img/guide_specific_contact.png" width={350} height={168}/>

      </div>
    );
  }

});

module.exports = RingtonesAndContacts;