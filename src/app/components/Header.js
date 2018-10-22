import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadMessages } from '../actions';

class Header extends React.Component {

  componentDidMount() {
    this.props.loadMessages();
  }

  render() {
    const { messages } = this.props;

    const topMargin = {
      marginTop: 20
    };

    if (!messages) {
      return <div style={topMargin}>Loading Messages...</div>;
    }

    if (messages.length > 0) {
      return <p className="lead" style={topMargin}>You have {messages.length} messages in your inbox.</p>;
    } else {
      return <p className="lead" style={topMargin}>You do not have any messages in your inbox.</p>;
    }
  }
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadMessages: bindActionCreators(loadMessages, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
