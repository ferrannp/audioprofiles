var React = require('react/addons');
var Material = require('material-ui');
var MUILeftNav = Material.LeftNav;
var MenuItem = Material.MenuItem;

var menuItems = [
  { route: 'home', text: 'Home' },
  { route: 'guide', text: 'Guide' },
  { route: 'roadmap', text: 'Roadmap' },
  { type: MenuItem.Types.SUBHEADER, text: 'About' },
  { route: 'contact', text: 'Contact' },
  {
    type: MenuItem.Types.LINK,
    payload: 'https://github.com/ferrannp/audioprofiles',
    text: 'GitHub'
  }
];

var LeftNav = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  componentWillReceiveProps (nextProps) {
    if(this.props.isOpen !== nextProps.isOpen){
      this.refs.leftNav.toggle();
    }
  },

  handleOnChange(e, selectedIndex, menuItem) {
    this.context.router.transitionTo(menuItem.route);
  },

  render() {
    var header = <div className="left-nav-header">Audio Profiles</div>;

    return (
      <MUILeftNav header={header} ref="leftNav" docked={false} menuItems={menuItems}
                  onChange={this.handleOnChange}/>
    );
  }
});

module.exports = LeftNav;