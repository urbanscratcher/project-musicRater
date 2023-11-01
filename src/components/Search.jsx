import { useEffect, useRef, useState } from 'react';
import { useKey } from '../hooks/useKey';
import useSearchRecommend from '../hooks/useSearchRecommend';
import ErrorMessage from './basics/ErrorMessage';
import Loader from './basics/Loader';
import TextInput from './ui/TextInput';

function Search({ setQuery, setShowModal }) {
  const [searchWord, setSearchWord] = useState('');
  const inputEl = useRef(null);

  const { recommends, isLoading2, error2 } = useSearchRecommend(searchWord);

  function handleChange(e) {
    setSearchWord(inputEl.current.value);
  }

  useKey('Enter', () => {
    if (document.activeElement !== inputEl.current) {
      inputEl.current.focus();
      setSearchWord('');
    }
    return;
  });

  useKey('Esc', () => {
    if (document.activeElement === inputEl.current) {
      setSearchWord('');
      inputEl.current.blur();
    }
    return;
  });

  function handleFocus(e) {
    setShowModal(true);
  }

  function handleBlur(e) {
    setShowModal(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const activeElement = document.activeElement;
    if (activeElement === e.target.querySelector('input') && searchWord !== '') {
      setQuery(searchWord);
      inputEl.current.blur();
    }
  }

  return (
    <div
      className="absolute top-[18%]
    z-20 flex flex-col self-baseline justify-self-center">
      <TextInput
        placeholder="Search songs, artists, etc..."
        value={searchWord}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        onSubmit={handleSubmit}
        inputRef={inputEl}
      />
      {isLoading2 && <Loader />}
      {error2 && <ErrorMessage message={error2} />}
      {!isLoading2 && !error2 && document.activeElement === inputEl?.current && recommends?.length > 0 && (
        <ul className="flex flex-col">
          {recommends.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ul>
      )}
    </div>
  );
}
export default Search;
