var React = require('react/addons');
var Material = require('material-ui');
var MUITabs = Material.Tabs;
var Tab = Material.Tab;

var Tabs = React.createClass({
	render() {
		return (
			<MUITabs tabWidth={150}>
				<Tab label="Home">
				</Tab>
				<Tab label="Guide">
				</Tab>
				<Tab label="Roadmap" >
				</Tab>
				<Tab label="Contact" />
			</MUITabs>
		);
	}
});

module.exports = Tabs;