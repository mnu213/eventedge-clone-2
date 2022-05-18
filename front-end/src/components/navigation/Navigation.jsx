import React, { useState, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';
import SlidingMenu from '../sliding-menu/Sliding-Menu';
import styles from './Navigation.css';
import { AuthContext } from '../../context/auth';

function Navigation() {
  const context = useContext(AuthContext);
  const [menuVisible, setMenuVisible] = useState(false);
  const logout = () => {
    context.logout();
  };
  return (
    <>
      <div className="navbar">
        <nav>
          <button type="submit" onClick={() => setMenuVisible(true)}>
            ☰
          </button>
          <h1 className="title">EventEdge</h1>
          <Link to="/login" className="navlogout" onClick={logout}>
            Logout
          </Link>
        </nav>
        {menuVisible && <SlidingMenu onClose={() => setMenuVisible(false)} />}
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
