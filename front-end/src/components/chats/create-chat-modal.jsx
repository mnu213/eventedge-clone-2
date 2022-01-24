import React from 'react';
import styles from '../modal.css';

function CreateChat(props) {
  const { onClose } = props;
  const submit = () => {
    alert('created event(nothing done in background)');
  };

  return (
    <div className="modal">
      <button type="submit" onClick={onClose}>
        X
      </button>
      <br />
      <form onSubmit={submit}>
        <button type="submit"> Create Chat </button>
        <br />
        <input type="text" placeholder="Group Chat Name" />
        <br />
        <input type="text" placeholder="Search for users..." />
      </form>
    </div>
  );
}

export default CreateChat;
