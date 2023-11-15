import { useEffect, useState } from 'react';

function ModalBackground({ showModal, setShowModal }) {
  const [visible, setVisible] = useState(showModal);

  function handleClick() {
    setShowModal(false);
    setVisible(false);
  }

  useEffect(() => {
    setVisible(showModal);
  }, [showModal]);

  return (
    visible && (
      <div
        className="absolute z-10 h-screen w-screen bg-black/40 backdrop-blur-lg"
        onClick={handleClick}></div>
    )
  );
}

export default ModalBackground;
