import React, { Component } from 'react';
import './ChatInput.scss';


class ChatInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      msg: ''
    }
  }

  updateMessage = (event) => {
    this.setState( {
      msg: event.target.value,
    });
  };

  handleClick = () => {
    this.props.handleMessage(this.state.msg);
    this.setState({
      msg: '',
    });
  };

  render() {
    return (
      <footer className="ChatInput">
        <input type="text" onChange={this.updateMessage}/>
        <button type="button" onClick={this.handleClick}>Send</button>
      </footer>
    );
  }
}

export default ChatInput;
