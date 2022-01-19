import React from 'react';

import './App.css';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import { useState } from 'react/cjs/react.development';

function App() {
  const [messages, setMessages] = useState([]);
  return (
    <div>
      <AddUser onAddUserClicked={(message) => {
        setMessages(prevMessage => { return [...prevMessage, message]; })
      }}></AddUser>
      <UsersList>{messages}</UsersList>
    </div>
  );
}

export default App;
