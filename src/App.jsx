import { useState } from 'react';
import './App.css';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import Search from './components/Search';
import SearchedList from './components/SearchedList';
import VideoDetail from './components/VideoDetail';
import ErrorMessage from './components/basics/ErrorMessage';
import Loader from './components/basics/Loader';
import AsideBox from './components/layouts/AsideBox';
import Body from './components/layouts/Body';
import Header from './components/layouts/Header';
import MainBox from './components/layouts/MainBox';
import ModalBackground from './components/ui/ModalBackground';
import useLocalStorage from './hooks/useLocalStorage';
import useMusics from './hooks/useMusics';
import NavMenu from './components/NavMenu';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [rated, setRated] = useLocalStorage([], 'rated');

  const { musics, isLoading, error } = useMusics(query);

  function handleSetRating(video, rating) {
    const ratedVideo = rated.filter(rated => selectedVideoId === rated?.id);
    const isRated = ratedVideo.length > 0;

    isRated
      ? setRated(
          rated.map(ratedVideo => {
            if (ratedVideo.id === video.videoDetails.videoId) {
              ratedVideo.rating = rating;
            }
            return ratedVideo;
          }),
        )
      : setRated(rated => [
          ...rated,
          {
            id: video.videoDetails.videoId,
            rating: rating,
            info: video,
          },
        ]);
  }

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
          <Logo />
          <Search
            setQuery={setQuery}
            setShowModal={setShowModal}
          />
          <NavMenu />
        </NavBar>
      </Header>

      <Body>
        <MainBox>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <SearchedList
              musics={musics.length > 0 && musics}
              onSelectMusic={handleSelectMusic}
            />
          )}
          {error && <ErrorMessage message={error} />}
        </MainBox>
        <AsideBox>
          {selectedVideoId ? (
            <VideoDetail
              selectedVideoId={selectedVideoId}
              rated={rated}
              onSetRated={(video, rating) => handleSetRating(video, rating)}
            />
          ) : (
            <div>basic index page</div>
          )}
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
