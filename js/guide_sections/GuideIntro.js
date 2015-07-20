var React = require('react/addons');
var Link = require('react-router').Link;
var SvgIcons = require('../components/SvgIcons');
var Material = require('material-ui');
var List = Material.List;
var ListDivider = Material.ListDivider;
var ListItem = Material.ListItem;
var GuideIndex = require('../components/GuideIndex');

var GuideIntro = React.createClass({

  render() {
    return (
      <div>
        <GuideIndex onlyMobile={true}/>

        <div className="medium-up">
          <h3><span className="anchor" id="faq"/>FAQ <a href="#faq">#</a></h3>
          <p>
            Audio Profiles will offer you 4 built-in profiles: Normal, Only Calls, Vibrate and
            Silent. With this, you are good to go if you want, but Audio Profiles can manage much
            more. Just navigate using the left menu to learn more about the different sections.
          </p>
          <p>
            If you have any issue or something is not clear, do not hesitate to <Link to="contact">
            Contact</Link> me.
          </p>

          <h4><span className="anchor" id="what-is"/>So... What is Audio Profiles? <a
            href="#what-is">#</a></h4>
          <p>It is an Android application that tries to enhance the user experience when it
            comes to control calls and notifications in your phone. It was born when Android decided
            to tied together the ringer and the notifications volume... And we don't want that!
            Do we?
          </p>

          <h4><span className="anchor" id="how-much"/>How much is your app? <a
            href="#how-much">#</a></h4>
          <p>The app is free and you can find it in the Google Play store. It also has what people
            call 'premium features' (which cost 0.99€). For now, this premium sections only include
            the Tasker feature. You should also know that from that money, the 60% is for me and the
            other 40% is for Google as commission.</p>

          <h4><span className="anchor" id="developers"/>How many developers are working on it? <a
            href="#developers">#</a></h4>
          <p>Just me, so only 1. Right now, my main problem is a lack of devices for testing.
            But I really like what I do!
          </p>

          <h4><span className="anchor" id="how-support"/>How do I support your app? <a
            href="#how-support">#</a></h4>
          <p>The best way is to give a 5 starts review in the Google Play store so the app will be
            more visible and you will help other users to find it. You can also send your old
            Android phone so I will have more devices to test with!</p>

          <h4><span className="anchor" id="why-permissions"/>Why does your app need permissions? <a
            href="#why-permissions">#</a></h4>
          <p>If you want an explanation of why and how we use each permission, please refer to the
            Permissions section.</p>
        </div>
      </div>
    );
  }

});

module.exports = GuideIntro;