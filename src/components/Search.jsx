import { useRef } from 'react';
import { useKey } from '../hooks/useKey';

function Search({ query, setQuery }) {
  const inputEl = useRef(null);

  useKey('Enter', function () {
    if (document.activeElement !== inputEl.current) {
      inputEl.current.focus();
      setQuery('');
    }
    return;
  });

  return (
    <input
      className="w-[40rem] justify-self-center
      rounded-[0.7rem] border-none
      bg-slate-100 px-[1.6rem] py-[1.1rem]
      text-3xl text-slate-800      
      transition-all
      placeholder:text-slate-800
      focus:-translate-y-[2px] focus:shadow focus:outline-none"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={e => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
export default Search;
