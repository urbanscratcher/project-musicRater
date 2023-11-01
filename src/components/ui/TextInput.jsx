function TextInput({ placeholder, value, onFocus, onChange, onSubmit, inputRef, onKeyDown }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        className="w-[40rem]
      rounded-[0.7rem] border-none bg-slate-100
      px-[1.6rem] py-[1.1rem]      
      text-3xl
      text-slate-800
      transition-all placeholder:text-slate-800 focus:-translate-y-[2px] focus:shadow focus:outline-none"
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
