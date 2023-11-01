import { useEffect, useState } from 'react';
import './App.css';
import MovieDetails from './components/MovieDetails';
import NavBar from './components/NavBar';
import Search from './components/Search';
import SearchedList from './components/SearchedList';
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
import useMusics from './hooks/useMusics';
import MovieList from './components/MovieList';
import VideoDetail from './components/VideoDetail';

function App() {
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);

  const [showModal, setShowModal] = useState(false);
  const [query2, setQuery2] = useState('');
  const { musics, isLoading2, error2 } = useMusics(query2);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const [watched, setWatched] = useLocalStorageState([], 'watched');

  function handleSelectMusic(id) {
    setSelectedVideoId(selectedVideoId => (id === selectedVideoId ? selectedVideoId : id));
  }

  return (
    <>
      <ModalBackground
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Header>
        <NavBar>
          <Search
            setQuery={setQuery2}
            setShowModal={setShowModal}
          />
        </NavBar>
      </Header>

      <Body>
        <MainBox>
          {isLoading2 && <Loader />}
          {!isLoading2 && !error2 && (
            <SearchedList
              musics={musics.length > 0 && musics}
              onSelectMusic={handleSelectMusic}
            />
          )}
          {error2 && <ErrorMessage message={error2} />}
        </MainBox>
        <AsideBox>
          {selectedVideoId ? <VideoDetail selectedVideoId={selectedVideoId} /> : <div>basic index page</div>}
        </AsideBox>
      </Body>
    </>
  );
}

export default App;

// function handleSelectMovie(id) {
//   setSelectedId(selectedId => (id === selectedId ? null : id));
// }

// function handleCloseMovie() {
//   setSelectedId(null);
// }

// function handleAddWatched(movie) {
//   setWatched(watched => [...watched, movie]);
// }

// function handleDeleteWatched(id) {
//   setWatched(watched => watched.filter(m => m.imdbID !== id));
// }

/* <MainBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList
              movies={movies}
              onSelectMovie={handleSelectMovie}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </MainBox>  */

// {selectedId ? (
//   <MovieDetails
//     selectedId={selectedId}
//     watched={watched}
//     onCloseMovie={handleCloseMovie}
//     onAddWatched={handleAddWatched}
//   />
// ) : (
//   <>
//     <WatchedSummary watched={watched} />
//     <WatchedMoviesList
//       watched={watched}
//       onDeleteWatched={handleDeleteWatched}
//     />
//   </>
// )}
