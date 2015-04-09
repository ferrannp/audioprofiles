var React = require('react/addons');

var SilentMode = React.createClass({

  render() {
    return (
      <div>
        <h3 id="silent-mode">Silent mode <a href="#silent-mode">#</a></h3>
        <p>On pre-Lollipop devices, using the Silent mode is very straightforward, on the other
          hand, it's not so obvious on a Lollipop device. Here, I will explain how to simulate a
          Silent mode profile using the Priority mode of Lollipop devices.</p>
      </div>
    );
  }

});

module.exports = SilentMode;