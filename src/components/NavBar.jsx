import Logo from './Logo';

function NavBar({ children }) {
  return (
    <nav
      className="relative grid h-[7.2rem]
      grid-cols-3 
      items-center 
    rounded-[0.9rem] bg-slate-400 
     px-[3.2rem] text-red-500">
      <Logo />
      {children}
    </nav>
  );
}

export default NavBar;
