var React = require('react/addons');
var IconButton = require('material-ui').IconButton;
var SvgIcons = require('./SvgIcons');

var Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        <p className="footer-text">Audio Profiles application {'\u0026'} website created by <a
          href="https://twitter.com/ferrannp">Ferran Negre</a>. Get it on <a
          href="https://play.google.com/store/apps/details?id=com.fnp.audioprofiles">Google Play
        </a>.</p>
        <div className="mui-dark-theme footer-icons">
          <IconButton touch={true} href="https://github.com/ferrannp/audioprofiles"
                      linkButton={true}>
            <SvgIcons.GithubIcon className="footer-icon"/>
          </IconButton>
          <IconButton touch={true} href="https://twitter.com/audioprofiles"
                      linkButton={true}>
            <SvgIcons.TwitterIcon className="footer-icon"/>
          </IconButton>
        </div>
      </div>
    );
  }
});

module.exports = Footer;