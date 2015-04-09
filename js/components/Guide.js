var React = require('react/addons');
var Material = require('material-ui');
var Paper = Material.Paper;
var Menu = Material.Menu;
var MediaQuery = require('react-responsive');

var FirstSteps = require('../guide_sections/FirstSteps');
var SilentMode = require('../guide_sections/SilentMode');

var getMenuItems = () => {
  return ([
    {
      type: Material.MenuItem.Types.NESTED, text: 'Profiles', items: [
      {payload: 'first_steps', text: 'First steps'},
      {payload: 'priority_calls', text: 'Priority calls', disabled: true},
      {payload: 'priority_notifications', text: 'Priority notifications', disabled: true},
      {payload: 'silent_mode', text: 'Silent mode'}
    ]
    },
    {payload: 'ringtones_contacts', text: 'Ringtones & Contatcs', disabled: true},
    {payload: 'scheduler', text: 'Scheduler', disabled: true},
    {payload: 'settingsS', text: 'Settings', disabled: true}
  ]
  );
};

var getSection = () => {
  return (
  {
    undefined: FirstSteps,
    'first_steps': FirstSteps,
    'silent_mode': SilentMode
  }
  );
};

var Guide = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  handleItemClick (e, index, menuItem){
    var section = this.context.router.getCurrentParams().section;
    //material-ui calls this twice for nested menus (so we check) TODO report bug
    if (section !== menuItem.payload) {
      this.context.router.transitionTo('guide', {section: menuItem.payload});
    }
  },

  render() {
    var items = getMenuItems();
    var SectionComponent = getSection()[this.context.router.getCurrentParams().section];

    return (
      <div className="sub-header-min">
        <div className="content grid">
          <MediaQuery minWidth={600}>
            <div className="col-1-4 below-subheader-min">
              <Menu menuItems={items} autoWidth={false} onItemClick={this.handleItemClick}/>
            </div>
          </MediaQuery>
          <div className="section col-3-4">
            <Paper zDepth={1} rounded={true} innerClassName={'guide-body'}>
              <SectionComponent />
            </Paper>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Guide;