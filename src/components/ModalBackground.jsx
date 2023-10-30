function ModalBackground({ isFocused, setIsFocused }) {
  function handleClick(e) {
    setIsFocused(!isFocused);
  }
  return (
    isFocused && (
      <div
        className="absolute z-10 h-screen w-screen bg-black/40 backdrop-blur-lg"
        onClick={handleClick}></div>
    )
  );
}

export default ModalBackground;
