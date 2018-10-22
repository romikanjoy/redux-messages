import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import AddMessageForm from './AddMessageForm';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="display-1">Messages</h1>
      </div>
      <div>
        <AddMessageForm />
      </div>
      <div className="row">
        <Header />
      </div>
      <div>
        <MessageList />
      </div>
    </div>
  );
};

export default App;
