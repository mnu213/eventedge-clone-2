import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '../navigation/Navigation';
import Login from '../login/Login';
import Registration from '../registration/Registration';
import Home from '../home/home';
import Events from '../events/Events';

function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route path="home" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
            <Route path="events" element={<Events/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
