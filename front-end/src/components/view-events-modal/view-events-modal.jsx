import React from 'react';
import styles from '../modal.css';

function ViewEvents(props) {
  const { onClose } = props;
  return (
    <div className="modal">
      <button type="submit" onClick={onClose}>
        X
      </button>
      <h2>View Events Modal</h2>
    </div>
  );
}

export default ViewEvents;
