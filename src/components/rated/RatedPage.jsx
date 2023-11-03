import RatedList from './RatedList';

function RatedPage({ storedRatedList, onSetStoredRatedList, onSelectMusic }) {
  return (
    <RatedList
      storedRatedList={storedRatedList}
      onSetStoredRatedList={onSetStoredRatedList}
      onSelectMusic={onSelectMusic}
    />
  );
}

export default RatedPage;
