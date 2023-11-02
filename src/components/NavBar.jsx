function NavBar({ children }) {
  return (
    <nav
      className="
        relative
        grid
        h-[7.2rem]
        w-[100%]        
        grid-cols-[max-content_auto_max-content]
        items-center         
        bg-slate-400 
        px-[3.2rem]
        text-red-500
        ">
      {children}
    </nav>
  );
}

export default NavBar;
