import React, { Component } from 'react';
import './Chat.scss';
import ChatHeader from './ChatHeader/ChatHeader';
import ChatBox from './ChatBox/ChatBox';
import ChatInput from './ChatInput/ChatInput';
import shopData from '../data/shop.json';
import answersData from '../data/answers.json';
import { ROLE } from '../constants';

class Chat extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      shop: {},
      messages: [],
    };
  }

  componentDidMount() {
    const defaultMessage = answersData.find((answer) => answer.tags.includes('DEFAULT'));
    const messages = this.state.messages.concat(defaultMessage);

    setTimeout(() => {
      this.setState({
        shop: shopData,
        messages,
      });
    }, 1000);
  }

  handleMessage = (msg) => {
    this.setState((state) => ({
      messages: state.messages.concat(this.addMessage(msg)),
    }));
  };

  addMessage = (messageText) => {
    const message = {
      text: messageText,
      role: ROLE.CUSTOMER,
    };
    const answers = answersData.filter(
      (answer) => answer.tags.find((tag) => message.text.includes(tag))
    );
    return [message].concat(answers);
  };

  render() {
    const { shop, messages } = this.state;
    return (
      <main className="Chat">
        <ChatHeader shop={shop} />
        <ChatBox messages={messages} />
        <ChatInput handleMessage={this.handleMessage} />
      </main>
    );
  }
}

export default Chat;
