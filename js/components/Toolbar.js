var React = require('react/addons');
var Material = require('material-ui');
var MUIToolbar = Material.Toolbar;
var ToolbarGroup = Material.ToolbarGroup;
var Tabs = require('./Tabs');
var MediaQuery = require('react-responsive');
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
    if(scroll == 0 && this.state.scroll > 0){
      this.setState({scroll: false})
    }else if (scroll > 0 && this.state.scroll == 0){
      this.setState({scroll: true})
    }
  },

  render() {

    var shadowStyle = {
      borderRadius: '2px',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.23)'
    };

    var title = this.context.router.getCurrentPathname();
    if(title) {
      title = title.replace('/', '');
      title = title.charAt(0).toUpperCase() + title.slice(1);
    }

    return (
      <div className="mui-toolbar mui-dark-theme" style={this.state.scroll ? shadowStyle : {}}>
        <MediaQuery maxWidth={599}>
          <IconButton className="hamburguer" onClick={this.props.toggleSideBar}>
            <NavigationMenu />
          </IconButton>
          <h1 className="toolbar-title">{title ? title:'Audio Profiles'}</h1>
        </MediaQuery>
        {/*4 tabs of 150px = 600px*/}
        <div className="toolbar-wrapper">
          <MediaQuery minWidth={600}>
            <ToolbarGroup key={1} float="right">
              <Tabs />
            </ToolbarGroup>
          </MediaQuery>
        </div>
      </div>
    );
  }
});

module.exports = Toolbar;