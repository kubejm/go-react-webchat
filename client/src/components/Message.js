import React, {Component} from 'react';
import Subheader from 'material-ui/Subheader';
import Paper from 'material-ui/Paper';

class Message extends Component {
  render() {
    const messageStyle = {
      margin: 10
    };

    const subheaderStyle = {
      paddingLeft: 0,
      lineHeight: '15px'
    }

    const bodyStyle = {
      margin: 10,
      padding: 10,
      display: 'inline-block'
    };

    return (
      <div style={messageStyle}>
        <Subheader style={subheaderStyle}>
          { this.props.user }
        </Subheader>
        <Paper style={bodyStyle} zDepth={2}>
          { this.props.body }
        </Paper>
      </div>
    );
  }
}

Message.defaultProps = {
  body: '',
  user: ''
};

export default Message;
