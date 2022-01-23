import React from 'react';
import { useParams } from 'react-router-dom';

export default function Chat() {
  let params = useParams();
  return (
    <>
      <h2>Chat: {params.chatId}</h2>

      <button type="button"> Create Event </button>
      <button type="button"> View Members </button>
      <button type="button"> View Events </button>
    </>
  );
}
