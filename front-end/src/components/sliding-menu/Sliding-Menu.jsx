import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sliding-Menu.css';

function SlidingMenu(props) {
  const { onClose } = props;

  const links = [
    <Link to="/home">
      <a className="link">Home</a>
    </Link>,
    <Link to="/chats">
      <a className="link">Chats</a>
    </Link>,
    <Link to="/events">
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
