import React from 'react';
import styles from './pending-event.css';

export default function PendingEvent({ chatId }) {
  return (
    <div className="event">
      <h2>Event Request for Chat {chatId}</h2>
      <button type="button">Accept</button>
      <button type="button">Decline</button>
    </div>
  );
}
