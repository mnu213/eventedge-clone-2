import React, { useState } from 'react';
import Event from './event/Event';
import PendingEvents from '../pending-events/pending-events';

export default function Events() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <button type="button" onClick={() => setModalVisible(true)}>
        View Pending Events
      </button>
      <div>
        <Event />
        <Event />
        <Event />
      </div>
      {modalVisible && <PendingEvents onClose={() => setModalVisible(false)} />}
    </>
  );
}
