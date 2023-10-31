import { useRef, useState } from 'react';
import { useKey } from '../hooks/useKey';
import useSearchRecommend from '../hooks/useSearchRecommend';
import TextInput from './ui/TextInput';
import { useEffect } from 'react';

function Search2({ setQuery, setShowModal }) {
  const [searchWord, setSearchWord] = useState('');
  const inputEl = useRef(null);
  const { recommends, isLoading2, error2 } = useSearchRecommend(searchWord);

  useKey('Enter', () => {
    if (document.activeElement !== inputEl.current) {
      inputEl.current.focus();
      setSearchWord('');
    } else {
      inputEl.current.blur();
      setShowModal(false);
      setQuery(searchWord);
    }
    return;
  });

  function handleChange(e) {
    setSearchWord(e.target.value);
  }

  function handleFocus(e) {
    setShowModal(true);
  }

  return (
    <div
      className="absolute top-[18%]
    z-20 flex flex-col self-baseline justify-self-center">
      <TextInput
        placeholder="Search songs, artists, etc..."
        value={searchWord}
        handleFocus={handleFocus}
        handleChange={handleChange}
        inputRef={inputEl}
      />
      {document.activeElement === inputEl?.current && recommends?.length > 0 && (
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
