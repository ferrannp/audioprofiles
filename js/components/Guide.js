var React = require('react/addons');
var Material = require('material-ui');
var Paper = Material.Paper;
var Menu = Material.Menu;
var Link = require('react-router').Link;
var classNames = require('classnames');
var RaisedButton = Material.RaisedButton;

var GuideIntro = require('../guide_sections/GuideIntro');
var FirstSteps = require('../guide_sections/FirstSteps');
var SilentMode = require('../guide_sections/SilentMode');
var MessengerNotifications = require('../guide_sections/MessengerNotifications');
var PriorityCalls = require('../guide_sections/PriorityCalls');
var PriorityNotifications = require('../guide_sections/PriorityNotifications');

var getMenuItems = () => {
  return ([
    {
      type: Material.MenuItem.Types.NESTED, text: 'Profiles', items: [
      {payload: 'first_steps', text: 'First steps'},
      {payload: 'priority_calls', text: 'Priority calls'},
      {payload: 'priority_notifications', text: 'Priority notifications'},
      {payload: 'silent_mode', text: 'Silent mode'}
    ]
    },
    {
      type: Material.MenuItem.Types.NESTED, text: 'Tips & Tricks', items: [
      {payload: 'whatsapp_notifications', text: 'Whatsapp notifications', disabled: true},
      {payload: 'messenger_notifications', text: 'Facebook Messenger notifications'}
    ]
    },
    {payload: 'ringtones_contacts', text: 'Ringtones & Contatcs', disabled: true},
    {payload: 'scheduler', text: 'Scheduler', disabled: true},
    {payload: 'settings', text: 'Settings', disabled: true}
  ]
  );
};

var getSection = () => {
  return (
  {
    'first_steps': FirstSteps,
    'silent_mode': SilentMode,
    'messenger_notifications': MessengerNotifications,
    'priority_calls': PriorityCalls,
    'priority_notifications': PriorityNotifications
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
    var section = this.context.router.getCurrentParams().section;
    var SectionComponent = getSection()[section];

    return (
      <div className="sub-header-min">
        <div className="content grid">
          <div className="medium-up col-1-4 below-subheader-min">
            <Menu menuItems={items} autoWidth={false} onItemClick={this.handleItemClick}/>
          </div>
          <div className="section col-3-4">
            <RaisedButton onClick={() => this.context.router.transitionTo('guide')} primary={true}
                          label="Go to the guide index"
                          className={classNames("small-only guide-index-button",
                          {hidden: section == undefined})}/>
            <Paper zDepth={1} rounded={true} innerClassName={'guide-body'}>
              {section ? <SectionComponent /> : <GuideIntro items={items}/> }
            </Paper>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Guide;