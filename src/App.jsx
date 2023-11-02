import { useState } from 'react';
import './App.css';
import ErrorMessage from './components/basics/ErrorMessage';
import Loader from './components/basics/Loader';
import AsideBox from './components/layouts/AsideBox';
import Body from './components/layouts/Body';
import Header from './components/layouts/Header';
import MainBox from './components/layouts/MainBox';
import Logo from './components/navBar/Logo';
import NavBar from './components/navBar/NavBar';
import NavMenuBox from './components/navBar/NavMenuBox';
import Search from './components/navBar/Search';
import RatedPage from './components/rated/RatedPage';
import SearchedList from './components/searchedResult/SearchedList';
import ModalBackground from './components/ui/ModalBackground';
import PlaylistBtn from './components/ui/PlaylistBtn';
import StarBtn from './components/ui/StarBtn';
import VideoDetail from './components/videoDetail/VideoDetail';
import useLocalStorage from './hooks/useLocalStorage';
import useMusics from './hooks/useMusics';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [page, setPage] = useState('');
  const [storedRatedList, setStoredRatedList] = useLocalStorage([], 'rated');

  const { musics, isLoading, error } = useMusics(query);

  function handleSelectMusic(id) {
    setSelectedVideoId(selectedVideoId => (id === selectedVideoId ? selectedVideoId : id));
  }

  function handleClickStar() {
    setPage('star');
  }

  function handleClickPlaylist() {
    setPage('playlist');
  }

  return (
    <>
      <ModalBackground
        showModal={showModal}
        setShowModal={setShowModal}
      />
      <Header>
        <NavBar>
          <Logo />
          <Search
            setQuery={setQuery}
            setShowModal={setShowModal}
            setPage={setPage}
          />
          <NavMenuBox>
            <StarBtn
              full={true}
              half={false}
              color={'white'}
              onClickStar={handleClickStar}
            />
          </NavMenuBox>
        </NavBar>
      </Header>

      <Body>
        <>
          <MainBox>
            {page === 'star' ? (
              <RatedPage
                storedRatedList={storedRatedList}
                onSetStoredRatedList={setStoredRatedList}
                onSetSelectedVideoId={setSelectedVideoId}
              />
            ) : page === 'playlist' ? (
              <div>playlist</div>
            ) : isLoading ? (
              <Loader />
            ) : error ? (
              <ErrorMessage message={error} />
            ) : (
              !isLoading &&
              !error && (
                <SearchedList
                  musics={musics.length > 0 && musics}
                  onSelectMusic={handleSelectMusic}
                />
              )
            )}
          </MainBox>
          <AsideBox>
            {selectedVideoId ? (
              <VideoDetail
                selectedVideoId={selectedVideoId}
                storedRatedList={storedRatedList}
                onSetStoredRatedList={setStoredRatedList}
              />
            ) : (
              <div>basic index page</div>
            )}
          </AsideBox>
        </>
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
