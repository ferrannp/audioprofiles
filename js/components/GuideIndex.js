var React = require('react');
var Material = require('material-ui');
var List = Material.List;
var ListDivider = Material.ListDivider;
var ListItem = Material.ListItem;
var Colors = Material.Styles.Colors;
var CustomTheme = require('../components/CustomTheme');
var classNames = require('classnames');

var GuideIndex = React.createClass({

  contextTypes: {
    router: React.PropTypes.func
  },

  transitionTo(e, payload){
    e.preventDefault();
    this.context.router.transitionTo('guide', {section: payload});
  },

  render() {
    return (
      <div className={classNames({'small-only': this.props.onlyMobile})}>
        <List subheader="Profiles"
              subheaderStyle={{color: CustomTheme.getPalette().primary1Color}}>
          <ListItem onTouchTap={(e) => this.transitionTo(e, 'first_steps')}
                    primaryText="First steps" />
          <ListItem onTouchTap={(e) => this.transitionTo(e,'priority_calls')}
                    primaryText="Priority Calls"/>
          <ListItem onTouchTap={(e) => this.transitionTo(e,'priority_notifications')}
                    primaryText="Priority Notifications"/>
          <ListItem onTouchTap={(e) => this.transitionTo(e,'silent_mode')}
                    primaryText="Silent mode"/>
        </List>
        <ListDivider />
        <List subheader="Tips &amp; Tricks"
              subheaderStyle={{color: CustomTheme.getPalette().primary1Color}}>
          <ListItem primaryText="Whatsapp notifications" disabled={true}
                    style={{color: Colors.minBlack}}/>
          <ListItem onTouchTap={(e) => this.transitionTo(e,'messenger_notifications')}
                    primaryText="Facebook Messenger notifications"/>
        </List>
        <ListDivider />
        <List subheader="Features"
              subheaderStyle={{color: CustomTheme.getPalette().primary1Color}}>
          <ListItem onTouchTap={(e) => this.transitionTo(e,'ringtones_contacts')}
                    primaryText="Ringtones &amp; Contacts"/>
          <ListItem onTouchTap={(e) => this.transitionTo(e,'scheduler')} primaryText="Scheduler"/>
          <ListItem primaryText="Notification Widget" disabled={true}
                    style={{color: Colors.minBlack}}/>
        </List>
        <ListDivider />
        <List subheader="More"
              subheaderStyle={{color: CustomTheme.getPalette().primary1Color}}>
          <ListItem primaryText="Permissions" disabled={true}
                    style={{color: Colors.minBlack}}/>
          <ListItem primaryText="Settings" disabled={true}
                    style={{color: Colors.minBlack}}/>
        </List>
      </div>
    )
  }

});

module.exports = GuideIndex;