import StarRating from '../../ui/StarRating';

function RatedSummaryItem({ label, calculated }) {
  return (
    <li
      className="flex items-center justify-center gap-2"
      key={label}>
      <p>
        {label} ({calculated.toFixed(1)})
      </p>
      <StarRating
        clickable={false}
        defaultRating={calculated}
        size="md"
      />
    </li>
  );
}

export default RatedSummaryItem;
