function LogoBox({ children, page }) {
  const isMain = page === 'main';

  return <div className={`${isMain && 'col-span-2'} flex items-center`}>{children}</div>;
}

export default LogoBox;
