import { useState } from 'react';
import './App.css';
import Box from './components/Box';
import ErrorMessage from './components/ErrorMessage';
import Loader from './components/Loader';
import MainBox from './components/MainBox';
import ModalBackground from './components/ModalBackground';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Search2 from './components/Search2';
import WatchedMoviesList from './components/WatchedMoviesList';
import WatchedSummary from './components/WatchedSummary';
import useLocalStorageState from './hooks/useLocalStorageState';
import useMovies from './hooks/useMovies';

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
