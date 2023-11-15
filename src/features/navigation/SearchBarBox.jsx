function SearchBarBox({ children, page }) {
  return <div className={`flex items-center ${page !== 'main' && 'px-20'}`}>{children}</div>;
}

export default SearchBarBox;
