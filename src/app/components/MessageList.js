import React from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class MessageList extends React.Component {

  render() {
    const { messages } = this.props;

    if (messages) {
      return messages.length > 0 &&
            <ul className="list-group">
              {messages.map((message) => <Message key={message.id} message={message} />)}
            </ul>;
    }
    return null;
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

export default connect(mapStateToProps)(MessageList);
