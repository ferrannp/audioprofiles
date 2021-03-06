var React = require('react');

/**
 * Based on ideas from:
 * @http://andmag.se/2012/10/responsive-images-how-to-prevent-reflow/
 * @http://nicolasgallagher.com/flexible-css-cover-images/
 * @http://demosthenes.info/blog/586/CSS-Fluid-Image-Techniques-for-Responsive-Site-Design
 */

var FluidImage = React.createClass({

  propTypes: {
    containerClass: React.PropTypes.string,
    height: React.PropTypes.number.isRequired,
    width: React.PropTypes.number.isRequired,
    maxWidth: React.PropTypes.number,
    src: React.PropTypes.string.isRequired
  },

  render() {

    var ratio = (this.props.height/this.props.width)*100 + '%';

    var containerStyle = {
      maxWidth: this.props.maxWidth ? this.props.maxWidth : this.props.width,
      margin: '0 auto 14px auto'
    };

    var imgRatioStyle = {
      position: 'relative',
      height: '0',
      overflow: 'hidden',
      paddingBottom: ratio
    };

    var imgStyle = {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%'
    };

    return (
      <div style={containerStyle}>
        <div style={imgRatioStyle}>
          <img style={imgStyle} src={this.props.src}/>
        </div>
      </div>
    );
  }

});

module.exports = FluidImage;