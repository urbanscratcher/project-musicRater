import { average } from '../../helper/helper';

function WatchedSummary({ watched }) {
  const avgImdbRating = average(watched.map(movie => movie.imdbRating));
  const avgUserRating = average(watched.map(movie => movie.userRating));
  const avgRuntime = average(watched.map(movie => movie.runtime));

  return (
    <div
      className="
        rounded-[0.9rem]
        bg-slate-300
        px-[3.2rem] pb-[1.8rem] pt-[2.2rem] 
        shadow-lg">
      <h2 className="mb-[0.6rem] text-[1.6rem] uppercase">Movies you watched</h2>
      <div className="flex items-center gap-[2.4rem] text-[1.6rem] font-semibold">
        <p className="flex items-center gap-[0.8rem]">
          <span> # </span>
          <span>{watched.length} movies</span>
        </p>
        <p className="flex items-center gap-[0.8rem]">
          <span>⭐️</span>
          <span>{avgImdbRating.toFixed(2)}</span>
        </p>
        <p className="flex items-center gap-[0.8rem]">
          <span>🌟</span>
          <span>{avgUserRating.toFixed(2)}</span>
        </p>
        {!isNaN(avgRuntime) && (
          <p className="flex items-center gap-[0.8rem]">
            <span>⏳</span>
            <span>{avgRuntime.toFixed(2)} min</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default WatchedSummary;
