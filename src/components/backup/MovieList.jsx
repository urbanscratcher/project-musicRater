import Movie from './Movie';

function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className="list-none py-[0.8rem]">
      {movies?.map(movie => (
        <Movie
          movie={movie}
          key={movie.imdbID}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}

export default MovieList;
