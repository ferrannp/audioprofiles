var React = require('react/addons');
var Material = require('material-ui');
var MUIToolbar = Material.Toolbar;
var ToolbarGroup = Material.ToolbarGroup;
var Tabs = require('./Tabs');

var Toolbar = React.createClass({

	render() {
		return (
			<MUIToolbar>
			{/*<ToolbarGroup key={0} float="left">
					<h4 className="toolbarTitle">Audio Profiles</h4>
				</ToolbarGroup>*/}
				<ToolbarGroup key={1} float="right">
					<Tabs />
				</ToolbarGroup>
			</MUIToolbar>
		);
	}
});

module.exports = Toolbar;