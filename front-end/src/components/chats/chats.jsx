import React, { useState } from 'react';
import CreateChat from './create-chat-modal';

export default function Chats() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <input type="text" placeholder="Search your chats" />
      <button type="button" onClick={() => setModalVisible(true)}>
        {' '}
        +{' '}
      </button>
      <h2>Blahg</h2>
      {modalVisible && <CreateChat onClose={() => setModalVisible(false)} />}
    </>
  );
}
