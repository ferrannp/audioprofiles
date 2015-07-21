var React = require('react/addons');
var Material = require('material-ui');
var MUIToolbar = Material.Toolbar;
var ToolbarGroup = Material.ToolbarGroup;
var Tabs = require('./Tabs');
var IconButton = Material.IconButton;
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

  handleScroll(e){
    var scroll;
    if(e.pageY){
      scroll = e.pageY;
    }else{
      scroll = e.target.body.scrollTop;
    }
    if (scroll == 0 && this.state.scroll > 0) {
      this.setState({scroll: false})
    } else if (scroll > 0 && this.state.scroll == 0) {
      this.setState({scroll: true})
    }
  },

  render() {

    var toolbarStyle = {
      padding: '0'
    };

    var shadowStyle = {
      borderRadius: '2px',
      boxShadow: '0 3px 10px rgba(0, 0, 0, 0.23)',
      padding: '0'
    };

    var titleStyle = {
      display: this.state.scroll ? 'block':'none'
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
      <MUIToolbar className="toolbar" style={this.state.scroll ? shadowStyle : toolbarStyle}>
        <div className="small-only toolbar-mobile">
          <IconButton iconStyle={{fill: 'white'}} className="hamburger"
                      onClick={this.props.toggleSideBar}>
            <NavigationMenu />
          </IconButton>
          <h4 style={titleStyle} className="toolbar-title">{title ? title : 'Audio Profiles'}</h4>
        </div>
        <div className="medium-up">
            <Tabs />
        </div>
      </MUIToolbar>
    );
  }
});

module.exports = Toolbar;