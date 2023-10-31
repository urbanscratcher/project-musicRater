function TextInput({ placeholder, value, handleFocus, handleChange, inputRef }) {
  return (
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
      onFocus={handleFocus}
      onChange={handleChange}
      ref={inputRef}
    />
  );
}

export default TextInput;
