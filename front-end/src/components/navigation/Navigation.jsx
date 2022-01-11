import React, { useState } from 'react';
import SlidingMenu from '../sliding-menu/Sliding-Menu';

function Navigation() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div>
      <nav>
        <button type="submit" onClick={() => setMenuVisible(true)}>
          ☰
        </button>
        {menuVisible && <SlidingMenu onClose={() => setMenuVisible(false)} />}
      </nav>
    </div>
  );
}

export default Navigation;
