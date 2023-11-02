import { useRef, useState } from 'react';
import { useKey } from '../../hooks/useKey';
import useSearchRecommend from '../../hooks/useSearchRecommend';
import ErrorMessage from '../basics/ErrorMessage';
import Loader from '../basics/Loader';
import TextInput from '../ui/TextInput';
import { useEffect } from 'react';

function Search({ setQuery, setShowModal, setPage }) {
  const [searchWord, setSearchWord] = useState('');
  const [selectedWord, setSelectedWord] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const inputEl = useRef(null);
  const ulEl = useRef(null);
  const { recommends, isLoading, error } = useSearchRecommend(searchWord);

  useEffect(() => {
    setSelectedWord('');
    setSelectedIdx(-1);
  }, [recommends]);

  function handleChange(e) {
    setSearchWord(inputEl.current.value);
  }

  function handleFocus(e) {
    setShowModal(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const activeElement = document.activeElement;
    if (activeElement === e.target.querySelector('input') && searchWord !== '') {
      if (selectedWord !== '') setSearchWord(selectedWord);
      setQuery(selectedWord !== '' ? selectedWord : searchWord);
      inputEl.current.blur();
      setShowModal(false);
      setSelectedWord('');
      setSelectedIdx(-1);
      setPage('search');
    }
  }

  useKey('Enter', () => {
    if (document.activeElement !== inputEl.current) {
      inputEl.current.focus();
      setSearchWord('');
    }
    return;
  });

  function handleInputKeyDown(e) {
    const listLength = recommends.length;
    const isComposing = e.nativeEvent.isComposing;
    const inputKey = e.key;

    switch (inputKey) {
      case 'ArrowDown':
        if (!isComposing && listLength > 0) {
          if (selectedIdx >= -1 && selectedIdx < listLength - 1) {
            setSelectedIdx(selectedIdx => selectedIdx + 1);
            setSelectedWord(ulEl.current.children[selectedIdx + 1].textContent);

            console.log('go down...', selectedIdx + 1);
          }
        }
        break;
      case 'ArrowUp':
        if (!isComposing && listLength > 0) {
          if (selectedIdx === 0) {
            return;
          }

          if (selectedIdx > 0 && selectedIdx < listLength) {
            setSelectedIdx(selectedIdx => selectedIdx - 1);
            setSelectedWord(ulEl.current.children[selectedIdx - 1].textContent);
            return;
          }
        }
        break;
      case 'Escape':
        setSearchWord('');
        setShowModal(false);
        inputEl.current.blur();
        break;
      default:
        break;
    }
  }

  return (
    <div className="relative w-[100%] self-stretch">
      <div className="absolute left-[50%] top-[18%] z-20 translate-x-[-50%]">
        <TextInput
          placeholder="Search songs, artists, etc..."
          value={searchWord}
          onFocus={handleFocus}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onKeyDown={handleInputKeyDown}
          inputRef={inputEl}
        />
        {document.activeElement === inputEl.current && isLoading && <Loader />}
        {document.activeElement === inputEl.current && error && <ErrorMessage message={error} />}
        {document.activeElement === inputEl.current && !isLoading && !error && recommends?.length > 0 && (
          <ul
            className="flex flex-col"
            ref={ulEl}>
            {recommends.map((recommend, idx) => (
              <li
                className={recommend === selectedWord ? 'bg-red-500' : ''}
                key={recommend}>
                {recommend}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default Search;
