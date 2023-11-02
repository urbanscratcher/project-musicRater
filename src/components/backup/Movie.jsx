function Movie({ movie, onSelectMovie }) {
  return (
    <li
      className="
        relative
        grid
        cursor-pointer      
        grid-cols-[4rem_1fr] grid-rows-[auto_auto]
        items-center
        gap-x-[2.4rem]
        border-b border-solid border-gray-100
        px-[3.2rem]
        py-[1.6rem]
        text-[1.6rem]
        transition-all

      hover:bg-blue-100
        "
      onClick={() => onSelectMovie(movie.imdbID)}
      key={movie.imdbID}>
      <img
        className="row-span-full w-[100%]"
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <h3 className="text-[1.8rem]">{movie.Title}</h3>
      <div className="flex items-center gap-[2.4rem]">
        <p className="flex items-center gap-[0.8rem]">
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}

export default Movie;
