var React = require('react/addons');
var Material = require('material-ui');
var Paper = Material.Paper;
var Menu = Material.Menu;

var getMenuItems = () => {
  return ([
      { type: Material.MenuItem.Types.NESTED,text: 'Profiles', selectedIndex: 2, items: [
      { payload: '1', text: 'First steps'},
      { payload: '2', text: 'Priority calls'},
      { payload: '3', text: 'Priority notifications'},
      { payload: '4', text: 'Silent mode' }
    ] },
    { payload: '1', text: 'Ringtones & Contatcs'},
    { payload: '2', text: 'Scheduler'}
    ]
  );
};

var whiteColor = {
  background: '#ffffff'
};

var Guide = React.createClass({

  handleItemClick (e, index, menuItem){
    console.log(menuItem);
  },

  render() {
    var items = getMenuItems();

    return (
      <div className="sub-header-min">
        <div className="content grid">
        <div className="col-1-4 below-subheader-min">
          <Menu menuItems={items} autoWidth={false} onItemClick={this.handleItemClick}
            selectedIndex={2}/>
        </div>
        <div className="col-3-4" style={whiteColor}>
          <Paper zDepth={1} rounded={true} innerClassName={'guide-body'}>
            <h3>Profile / First steps</h3>
            <p>In order to see Google Groups when creating a profile, In order to see Google Groups
              when creating a profile,In order to see Google Groups when creating a profile,In
              order to see Google Groups when creating a profile,In order to see Google Groups
              when creating a profile,In order to see Google Groups<br /><br /> when creating a profile,
              In order to see Google Groups when creating a profile,In order to see Google Groups
              creating a profile,In order to see Google Groups when creating a profile,In order to
              see Google Groups when creating a profile,In order to see Google Groups when creating
              a profile,In order to see Google Groups when creating a profile,In order to see Google
              Groups when creating a profile,In order to see Google Groups<br /><br />
              creating a profile,In order to see Google Groups when creating a profile,In order to
              see Google Groups when creating a profile,In order to see Google Groups when creating
              a profile,In order to see Google Groups when creating a profile,In order to see Google
              a profile,In order to see Google Groups when creating a profile,In order to see Google
              a profile,In order to see Google Groups when creating a profile,In order to see Google
              a profile,In order to see Google Groups when creating a profile,In order to see Google
              Groups when creating a profile,In order to see Google Groups
              creating a profile,In order to see Google Groups when creating a profile,In order to
              see Google Groups when creating a profile,In order to see Google Groups when creating
              a profile,In order to see Google Groups when creating a profile,</p>
          </Paper>
        </div>
      </div>
      </div>
    );
  }
});

module.exports = Guide;