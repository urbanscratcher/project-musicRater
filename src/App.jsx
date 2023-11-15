import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

import './App.css';
import ErrorMessage from './ui/ErrorMessage';
import Loader from './ui/Loader';
import AsideBox from './ui/AsideBox';
import Body from './ui/Body';
import Header from './ui/Header';
import MainBox from './ui/MainBox';
import Logo from './features/navigation/Logo';
import LogoBox from './features/navigation/LogoBox';
import NavBar from './features/navigation/NavBar';
import NavMenuBox from './features/navigation/NavMenuBox';
import SearchBar from './features/navigation/SearchBar';
import SearchBarBox from './features/navigation/SearchBarBox';
import RatedPage from './features/rated/RatedPage';
import SearchedResults from './features/searched/SearchedResults';
import ModalBackground from './ui/ModalBackground';
import RatedListBtn from './ui/RatedListBtn';
import VideoDetail from './features/video-detail/VideoDetail';
import useLocalStorage from './hooks/useLocalStorage';
import useMusics from './hooks/useMusics';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState('main');
  const [storedRatedList, setStoredRatedList] = useLocalStorage([], 'rated');
  const [progress, setProgress] = useState(0);

  const { musics, isLoading, error } = useMusics(query);

  function handleSelectMusic(id) {
    setSelectedVideoId(selectedVideoId => (id === selectedVideoId ? selectedVideoId : id));
  }

  function handleClickStar() {
    setPage('star');
  }

  function handleClickLogo() {
    setQuery('');
    setSelectedVideoId(null);
    setPage('main');
  }

  return (
    <>
      <div className={`flex flex-col scroll-smooth transition-all`}>
        <LoadingBar
          color={'#444'}
          height={3}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
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
                onSetProgress={setProgress}
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
              <MainBox selectedVideoId={selectedVideoId}>
                {page === 'star' ? (
                  <RatedPage
                    storedRatedList={storedRatedList}
                    onSetStoredRatedList={setStoredRatedList}
                    onSelectMusic={handleSelectMusic}
                  />
                ) : isLoading ? (
                  <Loader onSetProgress={setProgress} />
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
              {selectedVideoId && (
                <AsideBox>
                  <VideoDetail
                    selectedVideoId={selectedVideoId}
                    storedRatedList={storedRatedList}
                    onSetStoredRatedList={setStoredRatedList}
                    onSetProgress={setProgress}
                  />
                </AsideBox>
              )}
            </>
          </Body>
        )}
      </div>
    </>
  );
}

export default App;
