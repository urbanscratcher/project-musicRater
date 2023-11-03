import EmptyResult from './EmptyResult';
import SearchedTop from './SearchedTop';
import SearchedVideo from './SearchedVideo';

function SearchedResults({ musics, onSelectMusic }) {
  const topResult = musics.length > 0 && musics.filter(item => item.category === 'Top result');

  const videos =
    musics.length > 0 &&
    musics.filter(
      item => item.category === 'Videos' || (item.category !== 'Top result' && item.resultType === 'video'),
    );

  return (
    <>
      {topResult?.length > 0 && <SearchedTop topResult={topResult[0]} />}
      {videos.length > 0 ? (
        <>
          <div className="flex flex-col gap-6 py-8">
            <p className="text-start text-2xl">검색 결과 {videos.length}건</p>
            <ul>
              {videos?.map(video => (
                <SearchedVideo
                  video={video}
                  key={video.videoId}
                  id={video.videoId}
                  onSelectMusic={onSelectMusic}
                />
              ))}
            </ul>
          </div>
        </>
      ) : (
        <EmptyResult />
      )}
    </>
  );
}

export default SearchedResults;
