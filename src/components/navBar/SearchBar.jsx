import { useEffect, useRef, useState } from 'react';
import { useKey } from '../../hooks/useKey';
import useSearchRecommend from '../../hooks/useSearchRecommend';
import ErrorMessage from '../basics/ErrorMessage';
import Loader from '../basics/Loader';
import TextInput from '../ui/TextInput';
import SearchIcon from '../ui/SearchIcon';

function SearchBar({ setQuery, setShowModal, setPage }) {
  const [searchWord, setSearchWord] = useState('');
  const [selectedWord, setSelectedWord] = useState('');
  const [selectedIdx, setSelectedIdx] = useState(-1);

  const inputRef = useRef(null);
  const ulEl = useRef(null);
  const { recommends, isLoading, error } = useSearchRecommend(searchWord);

  useEffect(() => {
    setSelectedWord('');
    setSelectedIdx(-1);
  }, [recommends]);

  function handleChange(e) {
    setSearchWord(inputRef.current.value);
  }

  function handleFocus(e) {
    setShowModal(true);
  }

  function handleClose(e) {
    setSearchWord('');
    inputRef.current.focus();
  }

  function handleSubmit(e) {
    e.preventDefault();
    const activeElement = document.activeElement;
    if (activeElement === e.target.querySelector('input') && searchWord !== '') {
      if (selectedWord !== '') setSearchWord(selectedWord);
      setQuery(selectedWord !== '' ? selectedWord : searchWord);
      inputRef.current.blur();
      setShowModal(false);
      setSelectedWord('');
      setSelectedIdx(-1);
      setPage('search');
    }
  }

  useKey('Enter', () => {
    if (document.activeElement !== inputRef.current) {
      inputRef.current.focus();
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
        inputRef.current.blur();
        break;
      default:
        break;
    }
  }

  function handleClickRecommend(e, recommendWord) {
    if (selectedWord !== '') setSearchWord(selectedWord);
    setQuery(selectedWord !== '' ? selectedWord : searchWord);
    inputRef.current.blur();
    setShowModal(false);
    setSelectedWord('');
    setSelectedIdx(-1);
    setPage('search');
  }

  return (
    <div className="relative w-[100%] self-stretch">
      <div className="absolute top-[18%] z-20 w-[100%]">
        <TextInput
          placeholder="Search songs, artists, etc..."
          value={searchWord}
          onFocus={handleFocus}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onKeyDown={handleInputKeyDown}
          onClose={handleClose}
          inputRef={inputRef}
          type="search"
        />
        {document.activeElement === inputRef.current && isLoading && <Loader />}
        {document.activeElement === inputRef.current && error && <ErrorMessage message={error} />}
        {document.activeElement === inputRef.current && !isLoading && !error && recommends?.length > 0 && (
          <ul
            className={`my-2 flex flex-col text-start text-2xl transition-all`}
            ref={ulEl}>
            {recommends.map((recommend, idx) => (
              <li
                onMouseOver={() => {
                  setSelectedWord(recommend);
                  setSelectedIdx(idx);
                }}
                className={`${
                  recommend === selectedWord ? 'font-regular bg-white bg-opacity-20 py-3 text-3xl text-black' : ''
                }
                flex w-full cursor-default gap-3 rounded-full px-9 py-2 transition-all`}
                key={recommend}
                onClick={e => handleClickRecommend(e, recommend)}>
                <SearchIcon
                  color={'#111'}
                  styleClass={`translate-y-[2px] transition-all`}
                  size={recommend === selectedWord ? 'md' : 'sm'}
                />
                {recommend}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default SearchBar;
