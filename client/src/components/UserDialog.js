import React, {Component} from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class UserDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true, user: '' };

    this.handleClose = this.handleClose.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  handleClose() {
    this.props.onSetUser(this.state.user);
    this.setState({ open: false, user: this.state.user });
  }

  textChangeHandler(event) {
    this.setState({ user: event.target.value });
  }

  submitHandler(event) {
    event.preventDefault();

    if (event.target.value !== '') {
      this.handleClose();
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Submit"
        primary={true}
        disabled={false}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div>
        <Dialog
          title="What is your username?"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <form autoComplete="off" onSubmit={this.submitHandler}>
            <TextField
              onChange={this.textChangeHandler}
              value={this.state.user}
              hintText="Username..."
              fullWidth={true}
            />
          </form>
        </Dialog>
      </div>
    );
  }
}

export default UserDialog;
