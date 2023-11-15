function Body({ children }) {
  return (
    <main
      className={`
        flex
        h-[calc(100vh-7.2rem)]
        max-w-screen-2xl
        self-center
        2xl:w-[1536px]
        `}>
      {children}
    </main>
  );
}

export default Body;
