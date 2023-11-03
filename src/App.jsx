import { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

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
