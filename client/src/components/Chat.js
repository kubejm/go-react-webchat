import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MessageStream from './MessageStream';
import Sender from './Sender';
import UserDialog from './UserDialog';

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] };
    this.sendHandler = this.sendHandler.bind(this);
    this.setUserHandler = this.setUserHandler.bind(this);

    this.socket = new WebSocket("ws://" + window.location.host + "/ws");
    this.socket.addEventListener('message', (e) => {
      var msg = JSON.parse(e.data);
      this.appendMessage(msg);
    });
  }

  setUserHandler(user) {
    this.setState({
      user: user,
      message: this.props.message
    });
  }

  sendHandler(body) {
    const message = {
      user: this.state.user,
      body: body
    };

    this.socket.send(JSON.stringify(message));
  }

  appendMessage(message) {
    const messages = this.state.messages;
    messages.push(message);
    this.setState({ messages });
  }

  render() {
    return (
      <div>
        <AppBar 
          title="Chat" 
          showMenuIconButton={false}
        />
        <UserDialog onSetUser={this.setUserHandler} />
        <MessageStream messages={this.state.messages} />
        <Sender onSend={this.sendHandler} />
      </div>
    );
  }
}

Chat.defaultProps = {
  message: [],
  user: 'guest'
}

export default Chat;
