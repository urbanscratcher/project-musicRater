import SearchIcon from './SearchIcon';
import CloseBtn from './CloseBtn';

function TextInput({ placeholder, value, onFocus, onChange, onSubmit, inputRef, onKeyDown, onClose, type }) {
  return (
    <form
      onSubmit={onSubmit}
      className={`relative
      w-[100%]
      rounded-full border border-gray-200 bg-transparent
      px-[1.6rem]
      py-[1.1rem]
      transition-all
      ${document.activeElement === inputRef.current && '-translate-y-[2px] border-gray-700'}`}>
      {type === 'search' && (
        <>
          <SearchIcon
            color={document.activeElement === inputRef.current ? '#444' : '#aaa'}
            styleClass={'absolute translate-y-[2px] z-30'}
            size="md"
          />
          {document.activeElement === inputRef.current && (
            <CloseBtn
              styleClass={'absolute right-[1.4rem] z-30 translate-y-[2px]'}
              color={'#444'}
              onClose={onClose}
            />
          )}
        </>
      )}
      <input
        className={`w-[100%]
        ${type === 'search' && 'translate-x-12 pr-24'}
        border-none bg-transparent
        text-3xl text-gray-500
 placeholder:text-gray-400 focus:text-gray-800 focus:outline-none placeholder:focus:text-gray-700`}
        type="text"
        placeholder={placeholder}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={inputRef}
      />
    </form>
  );
}

export default TextInput;
