import React from 'react';
import styles from '../modal.css';

function CreateEvent(props) {
  const { onClose } = props;
  const submit = () => {
    alert('Event Created (nothing in background done)');
  };
  return (
    <div className="modal">
      <button type="submit" onClick={onClose}>
        X
      </button>
      <h2>Create Events Modal</h2>
      <form onSubmit={submit}>
        <input placeholder="Event Name" />
        <br />
        <input type="date" />
        <input type="time" />
        <br />
        <input placeholder="Location" />
        <br />
        <textarea placeholder="Event Description" />
        <button type="submit"> Create Event</button>
      </form>
    </div>
  );
}

export default CreateEvent;
