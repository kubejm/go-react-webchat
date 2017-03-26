import React, {Component} from 'react';
import Message from './Message';

class MessageStream extends Component {
  render() {
    const messages = this.props.messages.map((message, i) => {
      return (
        <Message
          key={ i }
          user={ message.user }
          body={ message.body }
        />
      );
    });

    return (
      <div className="message-stream">
        { messages }
      </div>
    );
  }
}

MessageStream.defaultProps = {
  messages: []
};

export default MessageStream;
