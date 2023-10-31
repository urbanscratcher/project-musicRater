import { useEffect, useState } from 'react';

function ModalBackground({ shown, setShown }) {
  const [visible, setVisible] = useState(shown);

  function handleClick() {
    setShown(false);
    setVisible(false);
  }

  useEffect(() => {
    setVisible(shown);
  }, [shown]);

  return (
    visible && (
      <div
        className="absolute z-10 h-screen w-screen bg-black/40 backdrop-blur-lg"
        onClick={handleClick}></div>
    )
  );
}

export default ModalBackground;
