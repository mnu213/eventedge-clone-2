import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sliding-Menu.css';

function SlidingMenu(props) {
  const { onClose } = props;

  const links = [
    <Link to="/home" onClick={onClose}>
      <a className="link" >Home</a>
    </Link>,
    <Link to="/chats" onClick={onClose}>
      <a className="link">Chats</a>
    </Link>,
    <Link to="/events" onClick={onClose}>
      <a className="link">Events</a>
    </Link>,
  ];
  return (
    <div className="slidingMenu">
      <button type="submit" onClick={onClose}>
        x
      </button>
      {links}
    </div>
  );
}

export default SlidingMenu;
