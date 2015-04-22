var React = require('react/addons');
var Material = require('material-ui');
var MUIToolbar = Material.Toolbar;
var ToolbarGroup = Material.ToolbarGroup;
var Tabs = require('./Tabs');
var IconButton = Material.IconButton;
var SvgIcon = Material.SvgIcon;
var NavigationMenu = Material.Icons.NavigationMenu;

var Toolbar = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState(){
    return {scroll: document.body.scrollTop}
  },

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  },

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },

  handleScroll(){
    var scroll = document.body.scrollTop;
    if (scroll == 0 && this.state.scroll > 0) {
      this.setState({scroll: false})
    } else if (scroll > 0 && this.state.scroll == 0) {
      this.setState({scroll: true})
    }
  },

  render() {

    var shadowStyle = {
      borderRadius: '2px',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.23)'
    };

    var title = this.context.router.getCurrentPathname();
    if (title) {
      var lastChar = title[title.length-1];
      title = title.replace('/', '');
      title = title.replace('_', ' ');

      if(lastChar !== '/') {
        title = title.replace('/', ' / ');
      }else{
        title = title.replace('/', '');
      }
    }

    return (
      <div className="mui-toolbar mui-dark-theme" style={this.state.scroll ? shadowStyle : {}}>
        <div className="small-only toolbar-mobile">
          <IconButton className="hamburger" onClick={this.props.toggleSideBar}>
            <NavigationMenu />
          </IconButton>
          <h4 className="toolbar-title">{title ? title : 'Audio Profiles'}</h4>
        </div>
        <div className="medium-up toolbar-wrapper">
          <ToolbarGroup key={1} float="right">
            <Tabs />
          </ToolbarGroup>
        </div>
      </div>
    );
  }
});

module.exports = Toolbar;