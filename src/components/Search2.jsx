import { useRef } from 'react';
import { useKey } from '../hooks/useKey';
import useSearchRecommend from '../hooks/useSearchRecommend';
import TextInput from './TextInput';

function Search2({ query, setQuery, isFocused, setIsFocused }) {
  const inputEl = useRef(null);
  const { recommends, isLoading2, error2 } = useSearchRecommend(query);

  useKey('Enter', function () {
    if (document.activeElement !== inputEl.current) {
      inputEl.current.focus();
      setQuery('');
    }
    return;
  });

  // Rerender fetched DATA
  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleFocus(e) {
    isFocused === false && setIsFocused(true);
  }

  // 0. search box area (r)
  // 2. search box (a, z-20 + r)
  // - query
  // 3. dropdown background (a, z-3)
  // - data list

  return (
    <div
      className="absolute top-[18%]
    z-20 flex flex-col self-baseline justify-self-center">
      <TextInput
        placeholder="Search songs, artists, etc..."
        value={query}
        handleFocus={handleFocus}
        handleChange={handleChange}
        inputRef={inputEl}
      />
      {isFocused && recommends.length > 0 && (
        <ul className="flex flex-col">
          {recommends.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
export default Search2;
