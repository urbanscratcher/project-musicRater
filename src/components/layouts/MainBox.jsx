function MainBox({ children }) {
  return (
    <div
      className="
      w-2/3
      overflow-x-hidden
      bg-transparent
      px-12
      pt-8
      ">
      {children}
    </div>
  );
}

export default MainBox;
