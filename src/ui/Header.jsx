function Header({ children, page }) {
  const isMain = page === 'main';

  return <header className={`${isMain && 'h-screen'} flex items-center justify-center`}>{children}</header>;
}

export default Header;
