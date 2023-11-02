import RatedList from './RatedList';

function RatedPage({ storedRatedList, onSetStoredRatedList, onSetSelectedVideoId }) {
  return (
    <RatedList
      storedRatedList={storedRatedList}
      onSetStoredRatedList={onSetStoredRatedList}
      onSetSelectedVideoId={onSetSelectedVideoId}
    />
  );
}

export default RatedPage;
