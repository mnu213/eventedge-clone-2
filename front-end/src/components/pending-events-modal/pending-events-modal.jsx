import React from 'react';
import styles from '../modal.css';

function PendingEvents(props) {
  const { onClose } = props;
  return (
    <div className="modal">
      <button type="submit" onClick={onClose}>
        X
      </button>
    </div>
  );
}

export default PendingEvents;
