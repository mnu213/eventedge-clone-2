import React from 'react';
import styles from '../modal.css';
import PendingEvent from './pending-event/pending-event';

function PendingEvents(props) {
  const { onClose } = props;
  const pendingEvents = [];
  const chatIds = [1, 2, 3, 4, 5];
  const listItems = chatIds.map((chatId) => (
    <PendingEvent key={chatId.toString()} chatId={chatId} />
  ));
  return (
    <div className="modal">
      <button type="submit" onClick={onClose}>
        X
      </button>
      {listItems}
    </div>
  );
}

export default PendingEvents;
