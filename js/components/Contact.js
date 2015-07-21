var React = require('react/addons');
var Material = require('material-ui');
var Paper = Material.Paper;
var TextField = Material.TextField;
var RaisedButton = Material.RaisedButton;
var Checkbox = Material.Checkbox;
var Snackbar = Material.Snackbar;
var CustomTheme = require('./CustomTheme');

var Contact = React.createClass({

  getInitialState() {
    return {
      validName: true,
      validEmail: true,
      validMessage: true,
      userReadTheGuide: false
    }
  },

  handleClick() {
    //Check inputs are valid
    var validName = true, validEmail = true, validMessage = true;
    if (this.refs.contactName.getValue().length == 0) {
      validName = false;
    }

    if (!this.validateEmail(this.refs.contactEmail.getValue())) {
      validEmail = false;
    }

    if (this.refs.contactMessage.getValue().length < 10) {
      validMessage = false;
    }

    if (validName && validEmail && validMessage) {
      this.refs.SnackBar.show();
      this.refs.contactName.clearValue();
      this.refs.contactEmail.clearValue();
      this.refs.contactMessage.clearValue();
      this.refs.checkReadTheGuide.setChecked(false);

      this.setState({
        validName: validName, validEmail: validEmail, validMessage: validMessage,
        userReadTheGuide: false
      });

    } else {
      this.setState({validName: validName, validEmail: validEmail, validMessage: validMessage});
    }
  },

  handleChange(e){
    var value = e.target.value;
    switch (e.target.name) {
      case "contactName":
        //Check name has at least 1 character
        if (!this.state.validName && value.length > 0) {
          this.setState({validName: true});
        }
        break;
      case "contactEmail":
        //Check email is correct;
        if (!this.state.validEmail && this.validateEmail(value)) {
          this.setState({validEmail: true});
        }
        break;
      case "contactMessage":
        //Check message has at least 10 characters
        if (!this.state.validMessage && value.length >= 10) {
          this.setState({validMessage: true});
        }
        break;
      default:
        break;
    }
  },

  //From http://stackoverflow.com/a/46181/2277631 (is more than enough)
  validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  },

  render() {
    return (
      <div className="content">
        <Paper zDepth={1} rounded={true} className="contact-body">
          <h3>Contact</h3>

          <p>To contact me, you can use our <a href="mailto:fnp.developer@gmail.com">email
          </a> or <a href="https://twitter.com/audioprofiles">Twitter</a>. It is also possible to
            use the form below.</p>
          <div>
            <TextField
              ref="contactName"
              name="contactName"
              className="field left"
              onChange={this.handleChange}
              type="text"
              errorStyle={{position: 'absolute', bottom: '-12px'}}
              errorText={this.state.validName ? '' : 'This field is required.'}
              floatingLabelText="Your name"/>
            <TextField
              ref="contactEmail"
              name="contactEmail"
              className="field"
              onChange={this.handleChange}
              hintText="valid@email.com"
              type="email"
              errorStyle={{position: 'absolute', bottom: '-12px'}}
              errorText={this.state.validEmail ? '' : 'Your email appears to be invalid.'}
              floatingLabelText="Your email"/>
          </div>
          <div>
            <TextField
              name="contactPhone"
              className="field left"
              hintText="Nexus 5"
              type="text"
              floatingLabelText="Your phone model"/>
            <TextField
              name="contactAndroid"
              className="field"
              hintText="5.1.0 (Lollipop)"
              type="text"
              floatingLabelText="Your Android version"/>
          </div>
          <TextField
            ref="contactMessage"
            name="contactMessage"
            className="message"
            errorStyle={{position: 'absolute', bottom: '-12px'}}
            onChange={this.handleChange}
            type="text"
            floatingLabelText="Your message"
            errorText={this.state.validMessage ? '' : 'Your message appears to be too short.'}
            multiLine={true}/>

          <Checkbox
            ref="checkReadTheGuide"
            onClick={(e) => {this.setState({userReadTheGuide: e.target.checked})}}
            className="checkbox"
            label="I read the guide before sending an issue."/>
  
          {/* TODO for now disabled because it's not implemented */}
          <RaisedButton style={{float: 'right'}} label="Send" primary={true}
                        disabled={true}
                        onClick={this.handleClick}/>

          <Snackbar
            style={{'backgroundColor': CustomTheme.getPalette().primary1Color}}
            ref="SnackBar"
            message="Your message was submitted. Thank you!"/>
        </Paper>
      </div>
    );
  }

});

module.exports = Contact;