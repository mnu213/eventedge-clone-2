import React from 'react';

function SlidingMenu(props) {
  const { onClose } = props;
  return (
    <div>
      <button type="submit" onClick={onClose}>
        x
      </button>
      LINK 1 LINK 2 LINK 3
    </div>
  );
}

export default SlidingMenu;
