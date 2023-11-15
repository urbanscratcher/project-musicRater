import { average, maximum, minimum } from '../../utils/helper';
import RatedSummaryItem from './RatedSummaryItem';

function RatedSummary({ ratedList }) {
  const ratedArr = ratedList && ratedList.map(video => video.rating);

  return ratedList ? (
    <div className="mx-auto flex flex-col gap-4 text-2xl">
      <p className="text-start text-3xl">평가 요약</p>
      <ul className="flex flex-col gap-3">
        <RatedSummaryItem
          label={'평균'}
          calculated={average(ratedArr)}
        />
        <RatedSummaryItem
          label={'최저'}
          calculated={minimum(ratedArr)}
        />
        <RatedSummaryItem
          label={'최고'}
          calculated={maximum(ratedArr)}
        />
      </ul>
    </div>
  ) : (
    <>Not Available</>
  );
}

export default RatedSummary;
