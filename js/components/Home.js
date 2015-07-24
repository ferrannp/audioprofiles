var React = require('react/addons');
var mui = require('material-ui');
var ThemeManager = new mui.Styles.ThemeManager();

var Home = React.createClass({

  getInitialState() {
    return {position: 0};
  },

  componentDidMount() {
    this.interval =  setInterval(() => this.setState({position: ++this.state.position % 8}), 3000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render() {
    var images = [];
    var position = this.state.position;
    for(var i=0;i<8;i++){
      images.push(<img src={'../img/screen_' + (i + 1)  + '.png'}
                       className={this.state.position == i ? 'active' : ''}/>)
    }

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
            <a href="https://play.google.com/store/apps/details?id=com.fnp.audioprofiles">
              <img alt="Android app on Google Play"
                   src="https://developer.android.com/images/brand/en_app_rgb_wo_60.png" />
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