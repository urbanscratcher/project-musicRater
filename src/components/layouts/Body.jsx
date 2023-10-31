function Body({ children }) {
  return (
    <div
      className="
        h-[calc(100vh-7.2rem]
        mx-[auto]
        grid
        max-w-screen-2xl
        grid-cols-3
       ">
      {children}
    </div>
  );
}

export default Body;
