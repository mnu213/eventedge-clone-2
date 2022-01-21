import React from 'react';
import './app.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import Home from '../home/home';
import Events from '../events/Events';
import Chats from '../chats/chats';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="events" element={<Events />} />
            <Route path="chats" element={<Chats />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
