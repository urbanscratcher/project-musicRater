import EmptyResult from '../../ui/EmptyResult';
import RatedList from './RatedList';
import RatedSummary from './RatedSummary';

function RatedPage({ storedRatedList, onSetStoredRatedList, onSelectMusic }) {
  return storedRatedList.length > 0 ? (
    <div className="flex w-full flex-col gap-4">
      <RatedSummary ratedList={storedRatedList} />
      <RatedList
        storedRatedList={storedRatedList}
        onSetStoredRatedList={onSetStoredRatedList}
        onSelectMusic={onSelectMusic}
      />
    </div>
  ) : (
    <EmptyResult
      errorMessage={'평가한 항목이 없습니다 :('}
      actionMessage={'지금 음악을 평가해보세요'}
    />
  );
}

export default RatedPage;
