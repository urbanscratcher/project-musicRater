function WatchedMovie({ movie, onDeleteWatched }) {
  return (
    <li
      className="
      relative
      grid
      grid-cols-[4rem_1fr] grid-rows-[auto_auto]
      items-center
      gap-x-[2.4rem]
      border-b border-solid border-gray-100
      px-[3.2rem]
      py-[1.6rem]
      text-[1.6rem]"
      key={movie.imdbID}>
      <img
        className="row-span-full w-[100%]"
        src={movie.poster}
        alt={`${movie.title} poster`}
      />
      <h3 className="text-[1.8rem]">{movie.title}</h3>
      <div className="flex items-center gap-[2.4rem]">
        <p className="flex items-center gap-[0.8rem]">
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p className="flex items-center gap-[0.8rem]">
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p className="flex items-center gap-[0.8rem]">
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="absolute right-[2.4rem] aspect-[1] h-[1.8rem] cursor-pointer rounded-[50%] border-none bg-red-500 text-[0.9rem] font-bold text-gray-900 transition-all hover:bg-red-800"
          onClick={() => onDeleteWatched(movie.imdbID)}>
          X
        </button>
      </div>
    </li>
  );
}

export default WatchedMovie;
