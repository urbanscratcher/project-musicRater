function SearchIcon({ color = 'black', styleClass, size = 'md' }) {
  return (
    <span
      role="img"
      className={`block ${size === 'md' ? 'h-8 w-8' : (size = 'sm' && 'h-6 w-6')} ${styleClass}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={color}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    </span>
  );
}

export default SearchIcon;
