function AsideBox({ children }) {
  return (
    <aside
      className="mx-4 my-1 w-1/3
      overflow-x-hidden
      rounded-2xl      
      py-2 pr-8
   ">
      {children}
    </aside>
  );
}

export default AsideBox;
