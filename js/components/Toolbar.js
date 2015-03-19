var React = require('react/addons');
var Material = require('material-ui');
var MUIToolbar = Material.Toolbar;
var ToolbarGroup = Material.ToolbarGroup;
var Tabs = require('./Tabs');

var Toolbar = React.createClass({

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

    return (
      <div className="mui-toolbar" style={this.state.scroll ? shadowStyle : {}}>
        <ToolbarGroup key={1} float="right">
          <Tabs />
        </ToolbarGroup>
      </div>
    );
  }
});

module.exports = Toolbar;