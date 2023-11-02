import { average, maximum, minimum } from '../../helper/helper';
import StarRating from '../ui/StarRating';

function RatedSummary({ ratedList }) {
  const ratedArr = ratedList && ratedList.map(video => video.rating);

  return ratedList ? (
    <div>
      <p>
        Average rate: {average(ratedArr).toFixed(1)}{' '}
        <StarRating
          clickable={false}
          defaultRating={average(ratedArr)}
        />
      </p>
      <p>
        Your least favorite: {minimum(ratedArr).toFixed(1)}{' '}
        <StarRating
          clickable={false}
          defaultRating={minimum(ratedArr)}
        />
      </p>

      <p>
        Your favorite: {maximum(ratedArr).toFixed(1)}{' '}
        <StarRating
          clickable={false}
          defaultRating={maximum(ratedArr)}
        />
      </p>
    </div>
  ) : (
    <>Not Available</>
  );
}

export default RatedSummary;
