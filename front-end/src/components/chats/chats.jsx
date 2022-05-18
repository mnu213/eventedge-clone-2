import axios from 'axios';
import React, { useState, useEffect } from 'react';
import CreateChat from './create-chat-modal';

export default function Chats() {
  const [modalVisible, setModalVisible] = useState(false);
  const [chats, setChats] = useState([]);


  const getChatsReq = async () => {
    console.log("line 9")
    let res = false;
    try {
      res = await axios.get('http://localhost:8000/chats',  {
        headers: {
          'Authorization': localStorage.getItem('token')
        }
      });
      setChats(res.data.chats)
      console.log(chats)
    } catch (err) {
      console.log(err.message);
      alert("chats failed to load")
    }
    
  };

  useEffect(() => {
    getChatsReq();
  }, []);
  
  return (
    <>
      <input type="text" placeholder="Search your chats" />
      <button type="button" onClick={() => setModalVisible(true)}>
        {' '}
        +{' '}
      </button>
      <h2>Blahg</h2>
      <h3>{chats}</h3>
      {modalVisible && <CreateChat onClose={() => setModalVisible(false)} />}
    </>
  );
}
