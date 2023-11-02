function MainBox({ children }) {
  return (
    <div
      className="
      w-2/3
      overflow-x-hidden
      bg-red-500      
      ">
      {children}
    </div>
  );
}

export default MainBox;
