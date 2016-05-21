var React = require('react');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var Home = React.createClass({

  getInitialState() {
    return {position: 0};
  },

  componentDidMount() {
    this.interval = setInterval(() => this.setState({position: ++this.state.position % 8}), 3000);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  render() {
    var images = [];
    for (var i = 0; i < 8; i++) {
      images.push(<img key={i} src={'../img/screen_' + (i + 1)  + '.png'}
                       className={this.state.position == i ? 'active' : ''}/>)
    }

    var badgeUrl = "https://play.google.com/store/apps/details?id=com.fnp.audioprofiles&" +
      "utm_source=global_co&utm_medium=prtnr&utm_content=Mar2515&utm_campaign=PartBadge&" +
      "pcampaignid=MKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1";

    return (
      <div className="content home">
        <div className="screen-container medium-up">
          <div className="phone-overlay">
            {images}
          </div>
        </div>
        <div className="content-right">
          <div className="sub-header-right">
            <h1>Audio Profiles</h1>
            <h2>Full control of your calls and notifications on Android</h2>
            <a href={badgeUrl}>
              <img alt="Get it on Google Play"
                   src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"
              />
            </a>
          </div>
          <div className="comments">
            <p>
              "Worth its price in gold. Very easy to create profiles as needed and
              even easier to switch between them. Must have for efficiency minded people. Try it
              out and convince yourself."
            </p>
            <p className="right">
              Mario Gambetta
            </p>
          </div>
          <div className="comments">
            <p>
              "Best application for sound profiles. You can even put tone for hidden numbers.
              Friendly user and you can totally customize your sound profiles"
            </p>
            <p className="right">
              Naomi Nakagawa
            </p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Home;