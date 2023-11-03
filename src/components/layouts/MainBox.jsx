function MainBox({ children, selectedVideoId }) {
  return (
    <div
      className={`
      ${selectedVideoId ? 'w-2/3' : 'w-full'}
      overflow-x-hidden
      bg-transparent
      px-12
      pt-8
      transition-all
      `}>
      {children}
    </div>
  );
}

export default MainBox;
