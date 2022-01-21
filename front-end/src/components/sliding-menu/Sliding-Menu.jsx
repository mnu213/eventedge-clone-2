import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Sliding-Menu.css';

function SlidingMenu(props) {
  const { onClose } = props;

  const links = [
    <Link to="/chats" className="link" onClick={onClose}>
      Chats
    </Link>,
    <Link to="/events" className="link" onClick={onClose}>
      Events
    </Link>,
  ];
  return (
    <div className="slidingMenu">
      <button type="submit" onClick={onClose}>
        X
      </button>
      {links}
    </div>
  );
}

export default SlidingMenu;
