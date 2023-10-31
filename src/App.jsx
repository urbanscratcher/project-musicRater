import { useEffect, useState } from 'react';
import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import NavBar from './components/NavBar';
import Search from './components/Search';
import Search2 from './components/Search2';
import WatchedMoviesList from './components/WatchedMoviesList';
import WatchedSummary from './components/WatchedSummary';
import ErrorMessage from './components/basics/ErrorMessage';
import Loader from './components/basics/Loader';
import AsideBox from './components/layouts/AsideBox';
import Body from './components/layouts/Body';
import Header from './components/layouts/Header';
import MainBox from './components/layouts/MainBox';
import ModalBackground from './components/ui/ModalBackground';
import useLocalStorageState from './hooks/useLocalStorageState';
import useMovies from './hooks/useMovies';

function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [shown, setShown] = useState(false);

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
        shown={shown}
        setShown={setShown}
      />
      <Header>
        <NavBar>
          <Search2
            query={query2}
            setQuery={setQuery2}
            isFocused={shown}
            setIsFocused={setShown}
          />
        </NavBar>
      </Header>

      <Search
        query={query}
        setQuery={setQuery}
      />
      <Body>
        <MainBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </MainBox>
        <AsideBox>
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
        </AsideBox>
      </Body>
    </>
  );
}

export default App;
