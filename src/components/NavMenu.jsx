import { useState } from 'react';
import Star from './Star';

function NavMenu() {
  const [full, setFull] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    console.log('clicked nav');
  }

  return (
    <div>
      <Star
        full={full}
        half={false}
        color={'white'}
        onHoverIn={() => setFull(true)}
        onHoverOut={() => setFull(false)}
        onClickStar={handleClick}
      />
    </div>
  );
}

export default NavMenu;
