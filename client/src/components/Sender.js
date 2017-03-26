import React, {Component} from 'react';
import TextField from 'material-ui/TextField';

class Sender extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    
    this.submitHandler = this.submitHandler.bind(this);
    this.textChangeHandler = this.textChangeHandler.bind(this);
  }

  submitHandler(event) {
    event.preventDefault();
    
    this.setState({ message: '' });

    this.props.onSend(this.state.message);
  }

  textChangeHandler(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const style = {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      margin: '2em'
    }

    return (
      <div style={style} className="sender">
        <form autoComplete="off" onSubmit={this.submitHandler}>
          <TextField
            onChange={this.textChangeHandler}
            value={this.state.message}
            hintText="Send message..."
            fullWidth={true}
          />
        </form>
      </div>
    );
  }
}

export default Sender;
