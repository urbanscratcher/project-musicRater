function MainBox({ children }) {
  return (
    <main
      className="
      col-[1/3]
      overflow-x-hidden
      bg-red-500
      ">
      {children}
    </main>
  );
}

export default MainBox;
