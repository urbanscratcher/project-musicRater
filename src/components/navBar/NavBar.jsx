function NavBar({ page, children }) {
  const isMain = page === 'main';
  const height = isMain ? 'h-auto' : 'h-[7.2rem]';
  const position = isMain && 'absolute top-[25%]';
  const alignment = isMain
    ? 'grid grid-rows-[max-content_100px] grid-cols-[1fr_max-content] gap-x-4'
    : 'grid grid-cols-[max-content_auto_max-content] gap-8 align-baseline';
  const px = isMain ? 'px-72' : 'px-[3.2rem]';

  return (
    <nav
      className={`
        w-[100%]
        ${position}
        ${alignment}
        ${height}
        ${px}                           
        `}>
      {children}
    </nav>
  );
}

export default NavBar;
