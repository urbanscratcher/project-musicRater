import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import MainBox from './components/MainBox';
import NavBar from './components/NavBar';
import NumResults from './components/NumResults';
import Search from './components/Search';
import Loader from './components/Loader';
import useMovies from './hooks/useMovies';
import MovieList from './components/MovieList';
import ErrorMessage from './components/ErrorMessage';
import MovieDetails from './components/MovieDetails';
import useLocalStorageState from './hooks/useLocalStorageState';
import WatchedSummary from './components/WatchedSummary';
import WatchedMoviesList from './components/WatchedMoviesList';
import useSearchRecommend from './hooks/useSearchRecommend';
import Search2 from './components/Search2';
import ModalBackground from './components/ModalBackground';

function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [isFocused, setIsFocused] = useState(false);

  const [query2, setQuery2] = useState('');

  const [watched, setWatched] = useLocalStorageState([], 'watched');

  function handleSelectMovie(id) {
    setSelectedId(selectedId => (id === selectedId ? null : id));
  }

  function handleCloseMovie() {
    setSelectedId(null);
  }

  function handleAddWatched(movie) {
    setWatched(watched => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched(watched => watched.filter(m => m.imdbID !== id));
  }

  return (
    <>
      <ModalBackground
        isFocused={isFocused}
        setIsFocused={setIsFocused}
      />
      <NavBar>
        <Search2
          query={query2}
          setQuery={setQuery2}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
        />
      </NavBar>

      <Search
        query={query}
        setQuery={setQuery}
      />
      <MainBox>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              watched={watched}
              onCloseMovie={handleCloseMovie}
              onAddWatched={handleAddWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMoviesList
                watched={watched}
                onDeleteWatched={handleDeleteWatched}
              />
            </>
          )}
        </Box>
      </MainBox>
    </>
  );
}

export default App;
