import { useRef } from 'react';
import { useKey } from '../hooks/useKey';
import useSearchRecommend from '../hooks/useSearchRecommend';
import TextInput from './ui/TextInput';

function Search2({ query, setQuery, isFocused, setIsFocused }) {
  const inputEl = useRef(null);
  const { recommends, isLoading2, error2 } = useSearchRecommend(query);

  useKey('Enter', () => {
    if (document.activeElement !== inputEl.current) {
      inputEl.current.focus();
      setQuery('');
    } else {
      inputEl.current.blur();
      setIsFocused(false);
      setQuery(query);
    }
    return;
  });

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleFocus(e) {
    isFocused === false && setIsFocused(true);
  }

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
