var React = require('react/addons');
var Material = require('material-ui');
var SvgIcon = Material.SvgIcon;

var MediaIcon = React.createClass({
  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25
        2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91
        7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path>
      </SvgIcon>
    );
  }
});

var PhotoLibrary = React.createClass({
  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0
        2-.9 2-2zm-11-4l2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"></path>
      </SvgIcon>
    );
  }
});

var Vibration = React.createClass({
  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M0 15h2V9H0v6zm3 2h2V7H3v10zm19-8v6h2V9h-2zm-3 8h2V7h-2v10zM16.5 3h-9C6.67 3 6
        3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16
        19H8V5h8v14z"></path>
      </SvgIcon>
    );
  }
});

var MoreButton = React.createClass({
  render: function() {
    return (
      <SvgIcon {...this.props}>
        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2
         2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
      </SvgIcon>
    );
  }
});

var SvgIcons = {
  MediaIcon: MediaIcon,
  PhotoLibrary: PhotoLibrary,
  Vibration: Vibration,
  MoreButton: MoreButton
};

module.exports = SvgIcons;