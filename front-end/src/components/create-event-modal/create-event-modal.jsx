import React from 'react';
import styles from '../modal.css';

function CreateEvent(props) {
  const { onClose } = props;
  return (
    <div className="modal">
      <button type="submit" onClick={onClose}>
        X
      </button>
      <h2>Create Events Modal</h2>
    </div>
  );
}

export default CreateEvent;
