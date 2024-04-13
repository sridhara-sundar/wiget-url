import React, {Component} from 'react';
import {Widget, addResponseMessage, addLinkSnippet, addUserMessage, setQuickButtons} from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
const buttons = [{label: 'first', value: '1'}, {label: 'second', value: '2'}];
export class App extends Component {
  componentDidMount() {
    addResponseMessage('Welcome to this awesome chat!');
    setQuickButtons(buttons);
  }

  handleNewUserMessage = newMessage => {
    console.log(`New message incoming! ${newMessage}`);
    addResponseMessage('Thank you for contact!');
    // Now send the message throught the backend API
  };

  handleQuickButtonClicked = data => {
    console.log(data);
    setQuickButtons(buttons.filter(button => button.value !== data));
  };

  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          handleQuickButtonClicked={this.handleQuickButtonClicked}
          // profileAvatar={'text'}
          title="Polls"
          subtitle="Polls Demo"
        />
      </div>
    );
  }
}


export default App
