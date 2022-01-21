import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SlidingMenu from '../sliding-menu/Sliding-Menu';
import styles from './Navigation.css';

function Navigation() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
      <div className="navbar">
        <nav>
          <button type="submit" onClick={() => setMenuVisible(true)}>
            ☰
          </button>
          <h1 className="title">EventEdge</h1>
          <Link to="/login" className="navlogin">
            Login
          </Link>
        </nav>
        {menuVisible && <SlidingMenu onClose={() => setMenuVisible(false)} />}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
