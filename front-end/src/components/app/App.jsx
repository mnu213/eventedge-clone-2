import React from 'react';
import './app.css';
import { BrowserRouter, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import Home from '../home/home';
import Events from '../events/Events';
import Chats from '../chats/chats';
import PrivateComponent from '../private-component/private-component';

function App() {
  const navigate = useNavigate;
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element = {<Login/>}
              // element={
              //   (1+1 === 3)? <Login/>: navigate('/chats')
              // }
          />
          <Route path="/" element={<Navigation />}>
            <Route path="home" element={<Home />} />
            <Route path="registration" element={<Registration />} />
            <Route path="chats" element={<PrivateComponent><Chats /></PrivateComponent>} />
            <Route path="events" element={<PrivateComponent><Events /></PrivateComponent>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
