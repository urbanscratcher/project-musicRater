function Body({ children }) {
  return (
    <div
      className="
        mx-[auto]
        grid
        h-[calc(100vh-7.2rem)]
        max-w-screen-2xl
        grid-cols-3
       ">
      {children}
    </div>
  );
}

export default Body;
