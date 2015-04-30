var React = require('react/addons');
var Material = require('material-ui');
var Paper = Material.Paper;
var TextField = Material.TextField;
var RaisedButton = Material.RaisedButton;
var Checkbox = Material.Checkbox;
var Snackbar = Material.Snackbar;

var Contact = React.createClass({

  handleClick: function() {
    this.refs.SnackBar.show();
  },

  render() {
    return (
      <div className="sub-header-min">
        <div className="content">
          <Paper zDepth={1} rounded={true} innerClassName={'contact-body'}>
            <h3>Contact</h3>

            <p>To contact me, you can use our <a href="mailto:fnp.developer@gmail.com">email</a> or <
              a href="https://twitter.com/audioprofiles">Twitter</a>. It is also possible to use
              the form below.</p>

            <TextField
              className="field"
              floatingLabelText="Your name"/>
            <TextField
              className="field email"
              hintText="valid@email.com"
              floatingLabelText="Your email"/>
            <TextField
              className="message"
              floatingLabelText="Your message"
              multiLine={true}/>

            <Checkbox
              className="checkbox"
              label="I read the guide before sending an issue." />

            <RaisedButton className="submit" label="Send" primary={true}
                          onClick={this.handleClick}/>

            <Snackbar
              ref="SnackBar"
              className="snackbar"
              message="Your message was submitted. Thank you!"/>
          </Paper>
        </div>
      </div>
    );
  }

});

module.exports = Contact;