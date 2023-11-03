import { useState } from 'react';
import './App.css';
import ErrorMessage from './components/basics/ErrorMessage';
import Loader from './components/basics/Loader';
import AsideBox from './components/layouts/AsideBox';
import Body from './components/layouts/Body';
import Header from './components/layouts/Header';
import MainBox from './components/layouts/MainBox';
import Logo from './components/navBar/Logo';
import LogoBox from './components/navBar/LogoBox';
import NavBar from './components/navBar/NavBar';
import NavMenuBox from './components/navBar/NavMenuBox';
import SearchBar from './components/navBar/SearchBar';
import SearchBarBox from './components/navBar/SearchBarBox';
import RatedPage from './components/rated/RatedPage';
import SearchedResults from './components/searchedResult/SearchedResults';
import ModalBackground from './components/ui/ModalBackground';
import RatedListBtn from './components/ui/RatedListBtn';
import VideoDetail from './components/videoDetail/VideoDetail';
import useLocalStorage from './hooks/useLocalStorage';
import useMusics from './hooks/useMusics';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('');
  const [storedRatedList, setStoredRatedList] = useLocalStorage([], 'rated');

  const { musics, isLoading, error } = useMusics(query);

  function handleSelectMusic(id) {
    setSelectedVideoId(selectedVideoId => (id === selectedVideoId ? selectedVideoId : id));
  }

  function handleClickStar() {
    setPage('star');
  }

  function handleClickLogo() {
    setPage('main');
  }

  return (
    <>
      <div className={`flex flex-col scroll-smooth transition-all`}>
        <ModalBackground
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <Header page={page}>
          <NavBar page={page}>
            <LogoBox page={page}>
              <Logo onClickLogo={handleClickLogo} />
            </LogoBox>
            <SearchBarBox page={page}>
              <SearchBar
                setQuery={setQuery}
                setShowModal={setShowModal}
                setPage={setPage}
              />
            </SearchBarBox>
            <NavMenuBox page={page}>
              <RatedListBtn
                color={'black'}
                onClick={handleClickStar}
              />
            </NavMenuBox>
          </NavBar>
        </Header>

        {page !== 'main' && (
          <Body>
            <>
              <MainBox>
                {page === 'star' ? (
                  <RatedPage
                    storedRatedList={storedRatedList}
                    onSetStoredRatedList={setStoredRatedList}
                    onSelectMusic={handleSelectMusic}
                  />
                ) : isLoading ? (
                  <Loader />
                ) : error ? (
                  <ErrorMessage message={error} />
                ) : (
                  !isLoading &&
                  !error && (
                    <SearchedResults
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
        )}
      </div>
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
