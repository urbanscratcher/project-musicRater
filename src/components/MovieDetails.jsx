import { useState } from 'react';
import Loader from './basics/Loader';
import { useEffect } from 'react';
import { useRef } from 'react';
import StarRating from './backup/StarRating_back';

const KEY = '590860d3';

function MovieDetails({ selectedId, watched, onCloseMovie, onAddWatched }) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState('');
  const counterRef = useRef(0);

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(() => {
    userRating && counterRef.current++;
  }, [userRating]);

  const isWatched = watched.map(movie => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(movie => movie.imdbID === selectedId)?.userRating;

  useEffect(() => {
    const getMovieDetails = async () => {
      setIsLoading(true);
      const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`);
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    };

    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `Movie | ${title}`;
  }, [title]);

  function handleAdd() {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: +imdbRating,
      userRating,
      runtime: runtime.split(' ').at(0),
      countRatingDecisions: counterRef.current,
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  return (
    <div className="text-[1.4rem] leading-[1.4]">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header className="flex">
            <button
              className="
              absolute left-[0.6rem] top-[0.6rem] z-[999]
              flex aspect-[1] h-[3.2rem]
              cursor-pointer
              items-center justify-center
              rounded-[50%] border-none
              bg-white
              font-serif
              text-[2.4rem]
              font-bold
              text-red-500
              shadow-lg
            "
              onClick={() => {}}>
              &larr;
            </button>
            <img
              className="w-[33%]"
              src={poster}
              alt={`Poster of ${movie} movie`}
            />
            <div
              className="
              flex w-[100%] flex-col gap-[1.4rem] bg-gray-100 px-[3rem] py-[2.4rem]
            ">
              <h2 className="mb-[0.4rem] text-[2.4rem] leading-[1.1]">{title}</h2>
              <p className="flex items-center gap-[0.8rem]">
                {released} &bull; {runtime}
              </p>
              <p className="flex items-center gap-[0.8rem]">
                <span>★</span>
                {imdbRating} IMDB Rating
              </p>
            </div>
          </header>

          <section>
            <div className="mb-[0.8rem] flex flex-col gap-[2.4rem] rounded-[0.9rem] bg-gray-600 px-[2.4rem] py-[2rem] font-semibold">
              {isWatched ? (
                <p>
                  You have already rated this movie <span>★</span> {watchedUserRating}
                </p>
              ) : (
                <>
                  <StarRating
                    maxRating={10}
                    size={24}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button
                      className="cursor-pointer rounded-[10rem] border-none
                      bg-red-600 p-[1rem]
                      text-[1.4rem] font-bold text-white transition-all
                      hover:bg-slate-400"
                      onClick={handleAdd}>
                      + Add to list
                    </button>
                  )}
                </>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
