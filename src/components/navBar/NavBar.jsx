function NavBar({ children }) {
  return (
    <nav
      className="        
        grid
        h-[7.2rem]
        w-[100%]
        grid-cols-[max-content_auto_max-content]
        items-center
        gap-8
        bg-slate-400 
        px-[3.2rem]
        text-red-500
        ">
      {children}
    </nav>
  );
}

export default NavBar;
