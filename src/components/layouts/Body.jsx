function Body({ children }) {
  return (
    <main
      className="
        mx-[auto]
        flex
        h-[calc(100vh-7.2rem)]
        max-w-screen-2xl
       ">
      {children}
    </main>
  );
}

export default Body;
