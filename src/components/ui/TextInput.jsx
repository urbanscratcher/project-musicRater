import SearchIcon from './SearchIcon';

function TextInput({ placeholder, value, onFocus, onChange, onSubmit, inputRef, onKeyDown, type }) {
  console.log(inputRef.current);

  return (
    <form
      onSubmit={onSubmit}
      className={`relative w-[100%] rounded-full border border-gray-200 bg-transparent px-[1.6rem]
    py-[1.1rem] transition-all ${document.activeElement === inputRef.current && '-translate-y-[2px] border-gray-700'}`}>
      {type === 'search' && (
        <SearchIcon
          color={document.activeElement === inputRef.current ? '#444' : '#aaa'}
          styleClass={'absolute translate-y-[2px]'}
        />
      )}
      <input
        className={`w-[100%] ${type === 'search' && 'translate-x-12'} border-none bg-transparent text-3xl text-gray-500
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
