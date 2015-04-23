var React = require('react/addons');
var Link = require('react-router').Link;
var SvgIcons = require('../components/SvgIcons');

var GuideItem = React.createClass({
  contextTypes: {
    router: React.PropTypes.func
  },

  handleClick (e){
    if(this.props.item.disabled){
      e.preventDefault();
      return;
    }
    this.context.router.transitionTo('guide', {section: this.props.item.payload});
  },

  render(){
    var className = this.props.className + (this.props.item.disabled ? ' mui-is-disabled' : '');

    return <li onClick={this.handleClick} className={className}>{this.props.item.text}</li>
  }
});

var GuideIntro = React.createClass({

  render() {
    var listIndex = [];

    var extraHeader = false;
    this.props.items.forEach(function (item) {
      if (item.type === "NESTED") {
        listIndex.push(<li className="nested-parent-menu" key={item.text}>{item.text}</li>);

        item.items.forEach(function (subItem) {
          listIndex.push(<GuideItem key={subItem.payload}
                                    className="mui-menu-item nested-child-menu"
                                    item={subItem}/>);
        });
      } else {
        if (!extraHeader) {
          listIndex.push(<li className="nested-parent-menu" key={"More"}>More</li>);
          extraHeader = true;
        }
        listIndex.push(<GuideItem key={item.payload} className="mui-menu-item nested-menu"
                                  item={item}/>);
      }
    });

    return (
      <div>
        <ul className="guide-intro small-only">
          {listIndex}
        </ul>
        <p className="medium-up">
          Temporal description. Use the menu to navigate through the sections.
        </p>
      </div>
    );
  }

});

module.exports = GuideIntro;