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
var RingtonesAndContacts = require('../guide_sections/RingtonesAndContacts');
var Scheduler = require('../guide_sections/Scheduler');

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
      {payload: 'ringtones_contacts', text: 'Ringtones & Contatcs'},
      {payload: 'scheduler', text: 'Scheduler'},
      {payload: 'notification_widget', text: 'Notification Widget', disabled: true},
      {
        type: Material.MenuItem.Types.NESTED, text: 'More', items: [
        {payload: 'permissions', text: 'Permissions', disabled: true},
        {payload: 'settings', text: 'Settings', disabled: true}
      ]
      }
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
    'priority_notifications': PriorityNotifications,
    'ringtones_contacts': RingtonesAndContacts,
    'scheduler': Scheduler
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

  //TODO deprecate Menu from new one on material-ui
  render() {
    var items = getMenuItems();
    var section = this.context.router.getCurrentParams().section;
    var SectionComponent = getSection()[section];

    return (
      <div className="content grid">
        <div className="medium-up col-1-4 below-subheader">
          <Menu menuItems={items} autoWidth={false} style={{fontSize: '14px'}} onItemTap={this.handleItemClick}/>
        </div>
        <div className="section col-3-4">
          <div className="small-only guide-index-button">
          <RaisedButton onClick={() => this.context.router.transitionTo('guide')} primary={true}
                        label="Go to the guide index"
                        style={{display: section === undefined ? 'none' : 'block'}} />
          </div>
          <Paper zDepth={1} rounded={true} className="guide-body">
            {section ? <SectionComponent /> : <GuideIntro items={items}/> }
          </Paper>
        </div>
      </div>
    );
  }
});

module.exports = Guide;