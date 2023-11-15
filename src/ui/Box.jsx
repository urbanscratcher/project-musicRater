import { useState } from 'react';

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative w-[42rem] max-w-[42rem] overflow-y-scroll rounded-[0.9rem] bg-slate-500">
      <button
        className="absolute right-[0.8rem] top-[0.8rem] z-[999]
        aspect-square h-[2.4rem]
        cursor-pointer rounded-[50%] border-none
        bg-slate-900 text-2xl font-bold text-gray-100"
        onClick={() => setIsOpen(open => !open)}>
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
