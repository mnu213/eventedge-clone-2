import React, { useState } from 'react';
import Chat from './chat/Chat';
import CreateChat from './create-chat-modal';

export default function Chats() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <>
      <input type="text" placeholder="Search your chats" />
      <button type="button" onClick={() => setMenuVisible(true)}>
        {' '}
        +{' '}
      </button>
      <Chat />
      <Chat />
      <Chat />
      {menuVisible && <CreateChat onClose={() => setMenuVisible(false)} />}
    </>
  );
}
