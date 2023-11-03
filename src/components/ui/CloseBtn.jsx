function CloseBtn({ onClose, color = 'white', styleClass }) {
  return (
    <span
      role="button"
      className={`block h-8 w-8 cursor-pointer ${styleClass}`}
      onClick={onClose}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={color}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </span>
  );
}

export default CloseBtn;
