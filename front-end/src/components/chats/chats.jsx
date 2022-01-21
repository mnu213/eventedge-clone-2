import React from 'react';
import Chat from './chat/Chat';

export default function Chats() {

  if (!!localStorage.getItem('email')) 
  return (
    <>
      <input />
      <button type="button"> + </button>
      <Chat />
      <Chat />
      <Chat />
    </>
  );
}
