import React, { useState } from 'react';
import Event from './event/Event';
import PendingEvents from '../pending-events-modal/pending-events-modal';

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
