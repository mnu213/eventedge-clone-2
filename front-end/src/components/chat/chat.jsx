import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import CreateEvent from '../create-event-modal/create-event-modal';
import ViewEvents from '../view-events-modal/view-events-modal';
import ViewMembers from '../view-members-modal/view-members-modal';

export default function Chat() {
  let params = useParams();
  const [modal0Visible, setModal0Visible] = useState(false);
  const [modal1Visible, setModal1Visible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);

  return (
    <>
      <h2>Chat: {params.chatId}</h2>

      <button type="button" onClick={() => setModal0Visible(true)}>
        {' '}
        Create Event{' '}
      </button>
      <button type="button" onClick={() => setModal1Visible(true)}>
        {' '}
        View Members{' '}
      </button>
      <button type="button" onClick={() => setModal2Visible(true)}>
        {' '}
        View Events{' '}
      </button>
      {modal0Visible && <CreateEvent onClose={() => setModal0Visible(false)} />}
      {modal1Visible && <ViewMembers onClose={() => setModal1Visible(false)} />}
      {modal2Visible && <ViewEvents onClose={() => setModal2Visible(false)} />}
    </>
  );
}
