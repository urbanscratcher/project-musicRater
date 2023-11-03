function AsideBox({ children }) {
  return (
    <aside
      className="mx-4 my-1 w-1/3
      overflow-x-hidden
      rounded-2xl      
      px-8 py-2
   ">
      {children}
    </aside>
  );
}

export default AsideBox;
