import React from 'react';
import styles from '../modal.css';

function CreateChat(props) {
  const { onClose } = props;
  return (
    <div className="modal">
      <button type="submit" onClick={onClose}>
        X
      </button>
      <br />
      <button type="submit"> Create Chat </button>
      <br />
      <input type="text" placeholder="Group Chat Name" />
      <br />
      <input type="text" placeholder="Search for users..." />
    </div>
  );
}

export default CreateChat;
