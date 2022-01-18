import React from 'react';
import styles from './Sliding-Menu.module.css';

function SlidingMenu(props) {
  const { onClose } = props;
  return (
    <div className={styles.slidingMenu}>
      <button type="submit" onClick={onClose}>
        x
      </button>
      <ul>
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
      </ul>
    </div>
  );
}

export default SlidingMenu;
