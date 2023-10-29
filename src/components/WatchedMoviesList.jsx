import WatchedMovie from './WatchedMovie';

function WatchedMoviesList({ watched, onDeleteWatched }) {
  return (
    <ul className="list-none py-[0.8rem]">
      {watched.map(movie => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMoviesList;
